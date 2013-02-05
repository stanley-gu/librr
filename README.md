# `librr`

A RoadRunner library wrapper.

# Installation

1. Use `git` to clone the repository:
   `git clone git://github.com/stanley-gu/librr.git`
2. Go into the librr project folder:
   `cd librr`
3. Install required packages `npm install`

# Development

## Vagrant

Development can be done using
[Vagrant](http://docs.vagrantup.com/v1/docs/getting-started/index.html).
Vagrant provides a virtual development environment (currently using Ubuntu
12.04 32-bit) that already has RoadRunner and its dependencies installed.

The Vagrant package is included in the repository as `package.box`.

To setup the development environment:

1. Install
   [Vagrant](http://docs.vagrantup.com/v1/docs/getting-started/index.html).
   (VirtualBox is also a requirement).
2. Build the virtual environment, from the main project directory run these commands:
    $ vagrant box add rr package.box
    $ vagrant init rr
    $ vagrant up # this starts the virtual machine containing RoadRunner
3. SSH into the virtual environment:
    $ vagrant ssh
4. Find the project files.
    * The project files for RoadRunner and `librr` are located in the home
      directory (`/home/vagrant/rr` and `/home/vagrant/librr`).

## Run Tests

1. `npm test`

# Current Status

* `librr_c_api` loads okay, but error occurs during simulation

````
Loading SBML into simulator
Processing model: Feedback
Compiler command:  2>&1 >> compilation.log
Compile system call returned: 512
Creating DLL failed..
````
