## CS 416 - UIUC - Narrative Visualization Final Project

Final Project Essay By Naveen Baskaran

The visualization is present in this url https://naveenkcb.github.io/narrative-viz-proj/

Messaging 
This story telling is going to focus on Infant mortality rate (IMR) which is the probability of a child dying before their first birthday, expressed as the number of infant deaths per 1,000 live births. It's a key indicator of a society's overall health because many factors that contribute to infant deaths also affect the health of the entire population. There are many factors that contribute to the IMR. but we will use an interactive slideshow type visualization, to explore the world data collected for the year 2023. This dataset contains around 150 countries across the world with a variety of economic indicators. This slideshow attempts to focus on the country’s Infant Mortality rate and how does a country’s economic data indicators namely Fertility Rate and Minimum Wage affect or contribute to the Infant Mortality Rate .

Visual Structure
This story telling utilizes the slideshow narrative visualization technique, while incorporating hybrid elements of the drill-down technique. The story is organized into various scenes and each scene contains guidance to the reader on how to interact with the visualization along with the annotation. 
The visualization is ordered into three scenes and follow the same template for visual consistency. The structure of the slides guides users from one idea to the next, but there is still room for individual exploration at each stage. We accomplish visual consistency by maintaining uniform elements throughout, introducing a mixture of text and chart elements, and having meaningful colors. Each scene is arranged in a container with grey background and is centered on the page. The axes are labelled and there is a color legend which has 3 unique colors which is maintained from scene to scene.

Scenes
The scenes themselves are constructed via HTML id tags. Each scene has a unique id that is linked via the buttons. The “Next/Previous” buttons allow users to navigate from scene to scene independently, but the structure helps guide the overall narrative. Each scene is composed of a unique chart that highlights its own distinct message. The bars and charts use the same color consistency to keep the viewer engaged through transitions. There is an introduction message to give a preview of what the reader is going to find about. Following the introduction, there are three scenes driving and guiding the story to the reader. First scene the reader is given a preview of which countries have the most infant mortality rate and highlighting on couple of countries which stands out from the trend. The second scene explains the trend on which countries have the impact due to the minimum wage data indicator and explains how it had direct correlation to infant mortality rate. Third scene continues to explain the trend by considering the fertility rate and showing its influence. Finally there is an ending message summarizes the trend and provides pointer for further exploration and enhancement.

Annotations
Annotations are used to highlight a trend in the data, direct the user to further investigate the data, and ask the user to draw a conclusion from the data. The annotations use a consistent template for font size, background and style.
Annotations remain consistent on the charts, even throughout changes triggered by the interactions. This allows the user to have some grounding on the overall message the visualization is trying to communicate. For example, the annotation about the fertility rate stays consistent throughout the vis transformation even when the legends are used to filter the data points. This can help a user better understand which countries have higher versus lower mortality rates.

Parameters
Parameters are used to engage the user in the narrative visualization and further explore the data. The parameter used in this visualization is the categorical variable “Infant Mortality Rate (IMR) Severity Group” By interacting with JavaScript input features, such as the toggle buttons or the interactive legend in each chart in all the scenes, the user can choose to see data about a specific category, or even filter out the datapoints by hovering over specific infant mortality severity group. The user input is used as a parameter that controls what the visualization portrays. The Infant Mortality rate is considered as the response element this visualization and the parameters are the country used in the scene1 bar chart, Minimum Wage used in scene2 scatter plot and fertility rate used in the scene 3 scatter plot. This allows the user to gain more information about the relationship between minimum wage vs IMR in scene2 and Fertility Rate vs IMR in scene3 output, not only as an overall trend, but based on IMR severity group as well.
The parameter states are the three IMR group values namely “Low”, “Medium”, “High”. The current state is controlled by this parameter IMR Severity group. When mousing over the color legend belonging to a particular severity group, the current state changes and the data points belonging to the other severity groups are set to opacity = 0.05. When mousing off the color legend the current state changes again and opacity for all data points for all vehicle types returns to 1.
In addition to further make it easier for the reader’s experience, the same mouser over and mouse off behavior is extended to the legend labels as well, which results in the same filtering experience.

Triggers
The triggers are implemented via events and callbacks, such as “mouseover” and “mouse out” in all the bar charts and scatter plot. When specific html elements experience these events, the callback function is invoked, and we can change the visualization with respect to the action indicated by the trigger. In this triggers are implemented in three ways.
Triggers are utilized with the parameter color legend that indicates the IMR severity group values. When mousing over the color legend or the legend label, the data points (dots in scatterplots or bars in bar chart) are accordingly filtered on the respective chart. The filtering of data is implemented by changing the opacity of the non-selected data points on mouseover callback and resetting the opacity on the mouse out callback.
Triggers are also utilized with the data points. The mouseover on each data point (bars in bar chart or dots in scatterplots) will show a tooltip with additional economic data indicator like GDP, Fertility Rate, Minimum Wage and Country to provide further insight to the reader. The tooltip disappears when the reader mouse off that datapoint.
Triggers are also implemented with user event of clicking the “Next/Previous/ Back to top” links available on each scene. Only Scene2 has all 3 links available as it is the center scene in the story telling. First scene has the “Next” event triggers. Third scene has the “Previous/Back to top” event trigger.

References
•	Dataset - https://www.kaggle.com/datasets/nelgiriyewithana/countries-of-the-world-2023
•	Axis Labels - https://d3-graph-gallery.com/graph/custom_axis.html#axislabels
•	Ordered bar plot - https://d3-graph-gallery.com/graph/barplot_ordered.html
•	Linear axis for charts - https://observablehq.com/@d3/d3-scalelinear

