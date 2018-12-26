Surface Reconstruction of ply file using CGAL 

1)CGAL::read_ply_point_set (f, point_set) 
	- read the point set, where f is the ifstream and point_set is where the points/colors will be stored

https://doc.cgal.org/latest/Point_set_3/group__PkgPointSet3IO.html#ga7555e1eebd0e6a1a852a065de94c9a46


2) point_set.remove(CGAL::grid_simplify_point_set(point_set3.0),point_set.end())

	- grid_simplify_point_set is a recursive function, that reorders the pointset to push all of the unwanted points to the back-half of the point_set. The function ultimately returns an interator to the point in the point_set where the unwanted points begin. The remove function essentially removes the part of the point_set from where the unwanted points begin, to the end of the point_set. 

https://doc.cgal.org/latest/Point_set_processing_3/group__PkgPointSetProcessingAlgorithms.html#gac7c81cc8a2986e3972e86612e4f847a1

https://doc.cgal.org/latest/Point_set_3/classCGAL_1_1Point__set__3.html

3)  CGAL::write_ply_point_set (fi, point_set);
	- write the thinned point cloud to a new ofstream (fi) from the contents of the point_set

https://doc.cgal.org/latest/Point_set_3/group__PkgPointSet3IO.html#ga91b012b0c03145b8f8a23978d43e4b8f


	

4) Reconstruction reconstruct (point_set.points().begin(), point_set.points().end()); // pass in the two iterators for the reconstruction range 
   reconstruct.increase_scale(4);
   reconstruct.reconstruct_surface();

	- do mesh reconstruction. increase_scale is for smoothing.  
	- tell the reconstruction class 



https://doc.cgal.org/latest/Scale_space_reconstruction_3/classCGAL_1_1Scale__space__surface__reconstruction__3.html#acf5262fc2bb55fe76d85f2e541a5b6ab
https://doc.cgal.org/latest/Scale_space_reconstruction_3/classCGAL_1_1Scale__space__surface__reconstruction__3.html#a300d0992b3be8caeacc1da30c5315eff