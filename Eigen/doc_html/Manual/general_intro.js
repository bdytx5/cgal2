var general_intro =
[
    [ "Installation", "installation.html", [
      [ "Introduction", "installation.html#installation_introduction", null ],
      [ "Prerequisites", "installation.html#secprerequisites", null ],
      [ "OS Specific Installation", "installation.html#secshippedcgal", [
        [ "CGAL on MAC OS X", "installation.html#sseccgalmacosxe", null ],
        [ "CGAL on Linux", "installation.html#sseccgaldebian", null ],
        [ "CGAL on Windows", "installation.html#sseccgalwindows", null ]
      ] ],
      [ "Downloading CGAL", "installation.html#secgettingcgal", null ],
      [ "Supported Compilers", "installation.html#seccompilers", null ],
      [ "Configuring CGAL with CMake", "installation.html#secconfigwithcmake", [
        [ "Configuring CGAL with the CMake GUI", "installation.html#installation_configuring_gui", null ],
        [ "Configuring CGAL with the cmake Command-Line Tool", "installation.html#installation_configuring_cmd", null ]
      ] ],
      [ "CGAL Libraries", "installation.html#seclibraries", [
        [ "Debug vs. Release", "installation.html#installation_debug", null ],
        [ "Static vs. Shared Libraries", "installation.html#installation_static", null ],
        [ "Header-only Option", "installation.html#subsection_headeronly", [
          [ "Header-only with CMake Configuration", "installation.html#subsection_headeronly_withconfiguration", null ],
          [ "Header-only without CMake Configuration", "installation.html#subsection_headeronly_without_configuration", null ],
          [ "CGAL Dependencies", "installation.html#subsection_headeronly_dependencies", null ],
          [ "Possible Problem on Windows", "installation.html#subsection_headeronly_pbonwindows", null ]
        ] ]
      ] ],
      [ "Essential Third Party Libraries", "installation.html#secessential3rdpartysoftware", [
        [ "Standard Template Library (STL)", "installation.html#thirdpartystl", null ],
        [ "Boost", "installation.html#thirdpartyBoost", null ],
        [ "GMP and MPFR", "installation.html#thirdpartyMPFR", null ],
        [ "zlib", "installation.html#thirdpartyzlib", null ],
        [ "OpenGL", "installation.html#thirdpartyOpenGL", null ],
        [ "Qt5", "installation.html#thirdpartyQt", null ]
      ] ],
      [ "CGAL Examples and Demos", "installation.html#installation_examples", null ],
      [ "Optional Third Party Libraries", "installation.html#secoptional3rdpartysoftware", [
        [ "LEDA", "installation.html#thirdpartyLeda", null ],
        [ "MPFI", "installation.html#thirdpartyMPFI", null ],
        [ "RS and RS3", "installation.html#thirdpartyRS3", null ],
        [ "NTL", "installation.html#thirdpartyNTL", null ],
        [ "Eigen", "installation.html#thirdpartyEigen", null ],
        [ "ESBTL", "installation.html#thirdpartyESBTL", null ],
        [ "Intel TBB", "installation.html#thirdpartyTBB", null ],
        [ "LASlib", "installation.html#thirdpartyLASlib", null ],
        [ "OpenCV", "installation.html#thirdpartyOpenCV", null ],
        [ "METIS", "installation.html#thirdpartyMETIS", null ]
      ] ],
      [ "Building CGAL", "installation.html#secbuilding", null ],
      [ "Installing CGAL", "installation.html#secinstalling", null ],
      [ "Multiple Variants of Makefiles (out-of-source build)", "installation.html#seccmakeoutofsource", null ],
      [ "Configuring and Building Programs Using CGAL", "installation.html#installation_configuring_using", [
        [ "Creating a CMake Script for a Program Using CGAL", "installation.html#installation_creating", null ],
        [ "cgal_create_CMakeLists", "installation.html#seccreate_cgal_CMakeLists", null ],
        [ "cgal_create_cmake_script", "installation.html#seccreate_cgal_cmake_script", null ],
        [ "Custom Flags in the Programs Using CGAL", "installation.html#installation_custom", null ]
      ] ],
      [ "Summary of CGAL's Configuration Variables", "installation.html#installation_summary", [
        [ "Component Selection", "installation.html#installation_component_selection", null ],
        [ "Compiler and Linker Flags", "installation.html#installation_flags", null ],
        [ "Additional Compiler and Linker Flags", "installation.html#installation_additional_flags", null ],
        [ "Miscellaneous Variables", "installation.html#installation_misc", null ],
        [ "Variables Used Only When Building Programs (Such as Demos or Examples)", "installation.html#installation_variables_building", null ],
        [ "Variables Providing Information About 3rd-Party Libraries", "installation.html#installation_variables_third_party", null ],
        [ "Boost Libraries", "installation.html#installation_boost", null ],
        [ "GMP and MPFR Libraries", "installation.html#installation_gmp", null ],
        [ "Qt5 Library", "installation.html#installation_qt5", null ],
        [ "LEDA Library", "installation.html#installation_leda", null ],
        [ "MPFI Library", "installation.html#installation_mpfi", null ],
        [ "RS and RS3 Library", "installation.html#installation_rs", null ],
        [ "NTL Library", "installation.html#installation_ntl", null ],
        [ "Eigen Library", "installation.html#installation_eigen", null ],
        [ "ESBTL Library", "installation.html#installation_esbtl", null ],
        [ "TBB Library", "installation.html#installation_tbb", null ]
      ] ],
      [ "Compiler Workarounds", "installation.html#installation_compiler_workarounds", null ],
      [ "Compiler Optimizations", "installation.html#seccompileroptimisations", null ]
    ] ],
    [ "Organization of the Manual", "manual.html", null ],
    [ "Preliminaries", "preliminaries.html", [
      [ "License Issues", "preliminaries.html#licenseIssues", [
        [ "GPL", "preliminaries.html#licensesGPL", null ],
        [ "LGPL", "preliminaries.html#licensesLGPL", null ],
        [ "Rationale of the License Choice", "preliminaries.html#licensesRationale", null ],
        [ "Commercial Licenses", "preliminaries.html#licensesCommercial", null ],
        [ "License Checking", "preliminaries.html#licenseCheck", null ]
      ] ],
      [ "Marking of Special Functionality", "preliminaries.html#markingSpecialFunctionality", [
        [ "Advanced Features", "preliminaries.html#advanced_features", null ],
        [ "Debugging Support Features", "preliminaries.html#debugging_support", null ],
        [ "Deprecated Code", "preliminaries.html#deprecated_code", null ]
      ] ],
      [ "Namespace CGAL", "preliminaries.html#Preliminaries_namespace", null ],
      [ "Thread Safety", "preliminaries.html#Preliminaries_thread_safety", null ],
      [ "C++11 Support", "preliminaries.html#Preliminaries_cc0x", null ],
      [ "Functor Return Types", "preliminaries.html#Preliminaries_functor", null ],
      [ "Checks", "preliminaries.html#preliminaries_secchecks", null ],
      [ "Identifying the Version of CGAL", "preliminaries.html#seccgal_version", null ],
      [ "Compile-time Flags to Control Inlining", "preliminaries.html#Preliminaries_flags", null ]
    ] ]
];