<h1>Moving Valmeyer</h1>

### Date:
February 2025

### Source:

[UC Davis Geographic Information Systems (GIS) Specialization](https://www.coursera.org/specializations/gis)

### Environment:
ArcGIS Pro

### Background/Context:
A town in Monroe County, Illinois took the nearly unprecedented step of moving the entire town from one location to another in order to mitigate its risk from flood in the Mississippi River floodplain. This town, named Valmeyer, determined that due to the repeated losses of life and property from floods, it was time to move to higher ground. Yes, this is a true story.

### Objective:
Manage and maintain a GIS layer of parcel information, which describes property boundaries and locations. Update the parcel information and add some information to the parcels to help the state department of emergency management in its analysis of the town’s move so it can better handle future disasters.

Add the mean, minimum, and maximum elevation of each parcel and the mean, minimum, and maximum slope, in degrees, of each parcel

You’ll also need to add the mean distance to the location of the old town, in meters – this will help the
office of emergency management understand what is involved in these types of town relocations.

The official TIGER road lines from the US Census Bureau won’t be updated for a while, and the county needs a rough sense of where the roads are for routing emergency vehicles. Digitize a new roads layer for the county by drawing lines between all of the parcels, where there are gaps. 

<h2>Output:</h2>

[See my published ArcGIS web map of Moving Valmeyer here](https://ucd-cpe.maps.arcgis.com/apps/mapviewer/index.html?webmap=5f54f9f8a855444186ba588f5cd33e4f)

I had to use several joins and relates to connect data from the different layers together including the raster dem layer for elevation and the vector parcel layers.
<br />
I used the Zonal Statistics geoprocessing tool to run MIN_MAX_MEAN calculations.
<br />
I used Euclidean Distance to measure the distance between the location of the old and new town.

<br />
<p align="left">
<img src="https://github.com/jameszil/pictures/blob/main/GIS/moving%20valmeyer%20(1).PNG?raw=true" height="150%" width="150%" alt="Query Steps"/>
<br />
<br />
<img src="https://github.com/jameszil/pictures/blob/main/GIS/moving%20valmeyer%20(2).PNG?raw=true" height="150%" width="150%" alt="Query Steps"/>
<br />
<br />
<img src="https://github.com/jameszil/pictures/blob/main/GIS/moving_valmeyer3.png?raw=true" height="100%" width="100%" alt="Query Steps"/>
<br />



