<h1>Sierra Nevada de Santa Marta Topographic Colored Hillshade Map and 3D Model</h1>

### Date:
April 2024

### Source:
[U.S. Geological Survey Landsat 8](https://earthexplorer.usgs.gov/)

### Environment:
QGIS

### Background/Context:
The Sierra Nevada de Santa Marta region fascinates me. It is a triangular mountain range on the tropical Atlantic Coast of Colombia

### Objective:
Create an elevation map, relief map, and a 3D model of this region using raster data from USGS Satelitte

<h2>Output:</h2>

First I exported the raster data from USGS Earth Explorer and then set the Landsat 8 Band Combinations for analysis via the Semi-Automatic Classification plugin.
Then I built a virtual raster layer to combine multiple rasters. I used multiply, edited shapes with vertex tool, merged two dem layers using mosaics and MMQGIS, trimmed layers by clipping mask layer, removed raster gaps with fill nodata to create a final output raster layer. From there I experimented with different raster tools to create a relief map, contour lines, hillshade, etc.

<p align="left">
Here is the original Esri Satellite Imagery
<br />
<img src="https://github.com/jameszil/pictures/blob/main/GIS/SM%20esri%20relief%20none.png?raw=true" height="60%" width="60%" alt="Steps"/>
<br />
<br />
Relief Map
<br />
<img src="https://github.com/jameszil/pictures/blob/main/GIS/SM%20esri%20relief.png?raw=true" height="60%" width="60%" alt="Steps"/>
<br />
<br />
With the mosaic as my raster output I got this output by using a combination of a singleband pseudocolor layer and a separate hillshade layer in front set at 40% opacity.
<br />
<br />
Elevation Map
<br />
<img src="https://github.com/jameszil/pictures/blob/main/GIS/SM%20hillshade2.png?raw=true" height="60%" width="60%" alt="Steps"/>
<br />
<br />
We are able to see the mountain range's elevation very clearly in this image. Then I created a 3D elevation intrusion model using Qgis2threejs
<br />
<br />
<img src="https://github.com/jameszil/pictures/blob/main/GIS/SM%203d3.png?raw=true" height="60%" width="60%" alt="Steps"/>
<br />
<img src="https://github.com/jameszil/pictures/blob/main/GIS/SM%203d4.png?raw=true" height="60%" width="60%" alt="Steps"/>
<br />
