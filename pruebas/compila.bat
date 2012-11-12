set x=boton

xcopy %x% build /i /e
cd build
7z a -tzip %x%.xpi * -r -mx=9
cd ..
move build\%x%.xpi .\%x%.xpi
rmdir /s /q build

