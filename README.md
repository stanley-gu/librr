# `librr`

A RoadRunner library wrapper.

# Installation

1. Use `git` to clone the repository:
   `git clone git://github.com/stanley-gu/librr.git`
2. Go into the librr project folder:
   `cd librr`
3. Install required packages
   `npm install`

# Current Status
*  Cannot seem to load models currently with an installation under Ubuntu 12.04
   See `rr.js`, when running `rr.librr_c_api('model.sbml')`, the following error occurs:
   `symbol lookup error: /usr/local/lib/librr_c_api.so: undefined symbol: dnrm2_`
   `dnrm2_` is found in `clapack.h` 

