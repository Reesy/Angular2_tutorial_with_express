#!/bin/bash
echo "#######  Running through:"
echo "Server compilation"
cd Atsb-server-side
tsc server --module commonjs
cd ./models
echo "Models compilation"
tsc blogModel --module commonjs
cd ../routes
echo "Routes compilation"
tsc routes --module commonjs
echo "DataAccess compilation"
cd ../DataAccess
tsc blogManager --module commonjs
echo "DataAccess test"
cd ../DataAccess
mocha
cd ../../Atsb-client-side/scripts
echo "#######  compiling app.ts"
tsc app --module commonjs
cd ../../Atsb-Server-side
echo "Attempting to run server"
node server
