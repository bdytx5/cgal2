# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 3.13

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:


#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:


# Remove some rules from gmake that .SUFFIXES does not remove.
SUFFIXES =

.SUFFIXES: .hpux_make_needs_suffix_list


# Suppress display of executed commands.
$(VERBOSE).SILENT:


# A target that is always out of date.
cmake_force:

.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /opt/local/bin/cmake

# The command to remove a file.
RM = /opt/local/bin/cmake -E remove -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /Users/brettyoung/desktop/cgal

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /Users/brettyoung/desktop/cgal

# Include any dependencies generated for this target.
include CMakeFiles/mesh.dir/depend.make

# Include the progress variables for this target.
include CMakeFiles/mesh.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/mesh.dir/flags.make

CMakeFiles/mesh.dir/mesh.cpp.o: CMakeFiles/mesh.dir/flags.make
CMakeFiles/mesh.dir/mesh.cpp.o: mesh.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/Users/brettyoung/desktop/cgal/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building CXX object CMakeFiles/mesh.dir/mesh.cpp.o"
	/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/mesh.dir/mesh.cpp.o -c /Users/brettyoung/desktop/cgal/mesh.cpp

CMakeFiles/mesh.dir/mesh.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/mesh.dir/mesh.cpp.i"
	/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /Users/brettyoung/desktop/cgal/mesh.cpp > CMakeFiles/mesh.dir/mesh.cpp.i

CMakeFiles/mesh.dir/mesh.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/mesh.dir/mesh.cpp.s"
	/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /Users/brettyoung/desktop/cgal/mesh.cpp -o CMakeFiles/mesh.dir/mesh.cpp.s

# Object files for target mesh
mesh_OBJECTS = \
"CMakeFiles/mesh.dir/mesh.cpp.o"

# External object files for target mesh
mesh_EXTERNAL_OBJECTS =

mesh: CMakeFiles/mesh.dir/mesh.cpp.o
mesh: CMakeFiles/mesh.dir/build.make
mesh: /opt/local/lib/libmpfr.dylib
mesh: /opt/local/lib/libgmp.dylib
mesh: /opt/local/lib/libCGAL.13.0.2.dylib
mesh: /opt/local/lib/libmpfr.dylib
mesh: /opt/local/lib/libgmp.dylib
mesh: /opt/local/lib/libboost_thread-mt.dylib
mesh: /opt/local/lib/libboost_system-mt.dylib
mesh: /opt/local/lib/libboost_chrono-mt.dylib
mesh: /opt/local/lib/libboost_date_time-mt.dylib
mesh: /opt/local/lib/libboost_atomic-mt.dylib
mesh: CMakeFiles/mesh.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --bold --progress-dir=/Users/brettyoung/desktop/cgal/CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Linking CXX executable mesh"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/mesh.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
CMakeFiles/mesh.dir/build: mesh

.PHONY : CMakeFiles/mesh.dir/build

CMakeFiles/mesh.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles/mesh.dir/cmake_clean.cmake
.PHONY : CMakeFiles/mesh.dir/clean

CMakeFiles/mesh.dir/depend:
	cd /Users/brettyoung/desktop/cgal && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /Users/brettyoung/desktop/cgal /Users/brettyoung/desktop/cgal /Users/brettyoung/desktop/cgal /Users/brettyoung/desktop/cgal /Users/brettyoung/desktop/cgal/CMakeFiles/mesh.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : CMakeFiles/mesh.dir/depend

