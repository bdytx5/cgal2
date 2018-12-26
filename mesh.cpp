#include <CGAL/Exact_predicates_inexact_constructions_kernel.h>
#include <CGAL/Polyhedron_3.h>
#include <CGAL/poisson_surface_reconstruction.h>
#include <CGAL/IO/read_xyz_points.h>
#include <CGAL/IO/write_ply_points.h>
#include <CGAL/property_map.h>
#include <CGAL/IO/read_ply_points.h>
#include <utility>
#include <string>
#include <iostream>
#include <vector>
#include <fstream>
#include <CGAL/Scale_space_surface_reconstruction_3.h>
#include <CGAL/IO/read_off_points.h>
#include <CGAL/Timer.h>
#include <CGAL/hierarchy_simplify_point_set.h>
#include <CGAL/IO/write_xyz_points.h>
#include <CGAL/Memory_sizer.h>
#include <CGAL/jet_smooth_point_set.h>
#include <CGAL/Iterator_range.h>
#include <CGAL/Point_set_3.h>

#include <CGAL/Exact_predicates_inexact_constructions_kernel.h>
#include <CGAL/Point_set_3.h>
#include <CGAL/jet_estimate_normals.h>
#include <CGAL/grid_simplify_point_set.h>
#include <CGAL/point_generators_3.h>
#include <CGAL/Exact_predicates_inexact_constructions_kernel.h>
#include <CGAL/Point_set_3.h>
#include <CGAL/Point_set_3/IO.h>
#include <fstream>
#include <limits>

#ifdef CGAL_LINKED_WITH_TBB
typedef CGAL::Parallel_tag Concurrency_tag;
#else
typedef CGAL::Sequential_tag Concurrency_tag;
#endif



// types
typedef CGAL::Exact_predicates_inexact_constructions_kernel Kernel;
typedef Kernel::FT FT;
typedef Kernel::Point_3 Point;
typedef Kernel::Vector_3 Vector;
typedef CGAL::cpp11::array<unsigned char, 3> Color;

// Point with normal, color and intensity
typedef CGAL::cpp11::tuple<Point, Vector, Color, int> PNCI;
typedef CGAL::Nth_of_tuple_property_map<0, PNCI> Point_map;
typedef CGAL::Nth_of_tuple_property_map<1, PNCI> Normal_map;
typedef CGAL::Nth_of_tuple_property_map<2, PNCI> color_map;
typedef CGAL::Nth_of_tuple_property_map<3, PNCI> Intensity_map;

typedef CGAL::Exact_predicates_inexact_constructions_kernel Kernel;
typedef CGAL::Scale_space_surface_reconstruction_3<Kernel> Reconstruction;
typedef CGAL::Point_set_3<Point> Point_set;

typedef Point_set::Property_map<Color> Color_map;
typedef Point_set::Property_map<FT> FT_map;


namespace CGAL {
    template< class F >
    struct Output_rep< ::Color, F > {
        const ::Color& c;
        static const bool is_specialized = true;
        Output_rep (const ::Color& c) : c(c)
        { }
        std::ostream& operator() (std::ostream& out) const
        {
            if (is_ascii(out))
                out << int(c[0]) << " " << int(c[1]) << " " << int(c[2]) << " " << int(c[3]);
            else
                out.write(reinterpret_cast<const char*>(&c), sizeof(c));
            return out;
        }
    };
}

void print_point_set (const Point_set& point_set)
{
    Color_map color;
    boost::tie (color, boost::tuples::ignore) = point_set.property_map<Color>("color");
    FT_map intensity;
    boost::tie (intensity, boost::tuples::ignore) =  point_set.property_map<FT>("intensity");
    
    std::cerr << "Content of point set:" << std::endl;
    for (Point_set::const_iterator it = point_set.begin();
         it != point_set.end(); ++ it)
        std::cerr << "* Point " << point_set.point(*it) // or point_set[it]
        << " with color [" << (int)(color[*it][0])
        << " " << (int)(color[*it][1])
        << " " << (int)(color[*it][2])
        << std::endl;
}





int main(int argc, char*argv[])
{

    
    std::ifstream f (argc > 1 ? argv[1] : "abq.ply");
    Point_set point_set;

    
    if (!f || !CGAL::read_ply_point_set (f, point_set))
    {
        std::cerr << "Can't read input file " << std::endl;
    }
    
    
    // Shows which properties are defined in the pointset
        std::vector<std::string> properties = point_set.properties();
        std::cerr << "Properties:" << std::endl;
        for (std::size_t i = 0; i < properties.size(); ++ i)
        std::cerr << " * " << properties[i] << std::endl;
    
    
    std::cerr << "size before simplification"<<point_set.points().size();

    // simplify point set, while maintaining color
        point_set.remove(CGAL::grid_simplify_point_set(point_set, 3.0),point_set.end());
  
        std::ofstream fi("colorPLY.ply");
        CGAL::write_ply_point_set (fi, point_set);


        std::cerr << "done: " << point_set.points().size() << " points after simplification." << std::endl;
        std::cerr << "Reconstruction ";
        CGAL::Timer t;
        t.start();
        // Construct the mesh in a scale space.
        Reconstruction reconstruct (point_set.points().begin(), point_set.points().end());
        reconstruct.increase_scale(4);
        reconstruct.reconstruct_surface();
        std::cerr << "done in " << t.time() << " sec." << std::endl;
        t.reset();
        std::ofstream out ("colorOutMesh.off");
        out << reconstruct;
        std::cerr << "Writing result in " << t.time() << " sec." << std::endl;
        std::cerr << "Done." << std::endl;
        return EXIT_SUCCESS;
}




