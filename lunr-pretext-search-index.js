var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  My Website   copyright  "
},
{
  "id": "sec-analyzing-Pixar-films-Excel",
  "level": "1",
  "url": "sec-analyzing-Pixar-films-Excel.html",
  "type": "Section",
  "number": "1.1",
  "title": "Demo:  Analyzing Pixar film data in Excel",
  "body": " Demo: Analyzing Pixar film data in Excel   I'm going to demonstrate how to use the version of Copilot that is built into Excel. If you don’t have a paid Copilot subscription, I recommend simply watching the demonstration. However, you’re welcome to download the file below if you'd like to follow along. Just keep in mind that without the paid version, you won’t be able to perform all the same actions I demonstrate.   Use this link to open an Excel file in Office 365: Pixar Film Data   Go to File and create a copy of this file online:    Click on the Copilot icon so that a Copilot window shows up on your screen:    This file includes the budgets, gross sales data, release dates, and other facts about Pixar films.  Now let's use Copilot to investigate our data!     What film did the best (or the worst) in the United States and Canada?    Sort the films from largest to smallest using worlwide box office sales (column E).    What is the average in Column C (US and Canada box office sales)?    The average value in Column C should be . Have Excel highlight rows for which the value in Column C is less than .    Highlight movies that were released after 2021.    The values in this dataset have not been adjusted for inflation. Ask Copilot to create a column labeled budget adjusted for inflation , and adjust the values from column B for inflation, using the release dates in column F.  Create a column labeled box office worldwide adjusted for inflation , and adjust the values from column E for inflation, using the release dates in column F. (Does Copilot adjust the values for inflation the same way it did to create column Q? If not, adjust the formula from column Q to create this new column.)     Let's now use Copilot in Excel to create data visualizations.  Enter the prompt below into Copilot and see if the output generated is helpful:  List key insights about this dataset and generate questions based on this data.    Try using Copilot to create the visualization or to answer the question.    Create a scatter plot for budget vs. worldwide sales. (If you insert the chart into the Excel sheet, is the chart correct?)  Try the prompt: Create a scatter plot using columns B and E.    Create a line chart showing the number of films released each year.  Make a table showing how many films were rated G and PG.  Make a bar chart for film ratings.  How did average worldwide box office sales for G movies compare to average worldwide box office sales for PG movies?  Create a box-and-whisker chart for the Rotten Tomatoes Score (in column J). Are there any outliers?     Create a confidence interval for the mean box office worldwide sales adjusted for inflation in column R.  Create a regression model to predict box office worldwide sales adjusted for inflation based on budget adjusted for inflation.   Is there an error? If so, why?    If you are able to use the response to create the model, how could you verify that it is correct?    What box office sales would we predict using this model if the budget is ?     "
},
{
  "id": "sec-analyzing-Pixar-films-Excel-2",
  "level": "2",
  "url": "sec-analyzing-Pixar-films-Excel.html#sec-analyzing-Pixar-films-Excel-2",
  "type": "Note",
  "number": "1.1.1",
  "title": "",
  "body": " I'm going to demonstrate how to use the version of Copilot that is built into Excel. If you don’t have a paid Copilot subscription, I recommend simply watching the demonstration. However, you’re welcome to download the file below if you'd like to follow along. Just keep in mind that without the paid version, you won’t be able to perform all the same actions I demonstrate.  "
},
{
  "id": "sec-analyzing-Pixar-films-Excel-8",
  "level": "2",
  "url": "sec-analyzing-Pixar-films-Excel.html#sec-analyzing-Pixar-films-Excel-8",
  "type": "Example",
  "number": "1.1.2",
  "title": "",
  "body": "   What film did the best (or the worst) in the United States and Canada?    Sort the films from largest to smallest using worlwide box office sales (column E).    What is the average in Column C (US and Canada box office sales)?    The average value in Column C should be . Have Excel highlight rows for which the value in Column C is less than .    Highlight movies that were released after 2021.    The values in this dataset have not been adjusted for inflation. Ask Copilot to create a column labeled budget adjusted for inflation , and adjust the values from column B for inflation, using the release dates in column F.  Create a column labeled box office worldwide adjusted for inflation , and adjust the values from column E for inflation, using the release dates in column F. (Does Copilot adjust the values for inflation the same way it did to create column Q? If not, adjust the formula from column Q to create this new column.)    "
},
{
  "id": "sec-analyzing-Pixar-films-Excel-10",
  "level": "2",
  "url": "sec-analyzing-Pixar-films-Excel.html#sec-analyzing-Pixar-films-Excel-10",
  "type": "Example",
  "number": "1.1.3",
  "title": "",
  "body": "Enter the prompt below into Copilot and see if the output generated is helpful:  List key insights about this dataset and generate questions based on this data.  "
},
{
  "id": "sec-analyzing-Pixar-films-Excel-11",
  "level": "2",
  "url": "sec-analyzing-Pixar-films-Excel.html#sec-analyzing-Pixar-films-Excel-11",
  "type": "Example",
  "number": "1.1.4",
  "title": "",
  "body": " Try using Copilot to create the visualization or to answer the question.    Create a scatter plot for budget vs. worldwide sales. (If you insert the chart into the Excel sheet, is the chart correct?)  Try the prompt: Create a scatter plot using columns B and E.    Create a line chart showing the number of films released each year.  Make a table showing how many films were rated G and PG.  Make a bar chart for film ratings.  How did average worldwide box office sales for G movies compare to average worldwide box office sales for PG movies?  Create a box-and-whisker chart for the Rotten Tomatoes Score (in column J). Are there any outliers?   "
},
{
  "id": "sec-analyzing-Pixar-films-Excel-12",
  "level": "2",
  "url": "sec-analyzing-Pixar-films-Excel.html#sec-analyzing-Pixar-films-Excel-12",
  "type": "Example",
  "number": "1.1.5",
  "title": "",
  "body": " Create a confidence interval for the mean box office worldwide sales adjusted for inflation in column R.  Create a regression model to predict box office worldwide sales adjusted for inflation based on budget adjusted for inflation.   Is there an error? If so, why?    If you are able to use the response to create the model, how could you verify that it is correct?    What box office sales would we predict using this model if the budget is ?    "
},
{
  "id": "sec-summarizing-Excel-files",
  "level": "1",
  "url": "sec-summarizing-Excel-files.html",
  "type": "Section",
  "number": "1.2",
  "title": "Summarizing Excel Files",
  "body": " Summarizing Excel Files  Copilot is also helpful for gaining key insights about a dataset and generating questions that would be good to explore based on the data.   For each of the datasets below, list key insights about this dataset and generate questions based on this data.     Box Office Data:       2024 Olympic Medalists: This data is from        Dentists by State: This data is from .         Here are some other things you can do for each Excel file:   Generate a report based on the dataset.    Generate a PowerPoint presentation based on this dataset.     (For anything you ask Copilot to generate, check to see if what it generated is helpful.)   "
},
{
  "id": "sec-summarizing-Excel-files-3",
  "level": "2",
  "url": "sec-summarizing-Excel-files.html#sec-summarizing-Excel-files-3",
  "type": "Investigation",
  "number": "1.2.1",
  "title": "",
  "body": " For each of the datasets below, list key insights about this dataset and generate questions based on this data.     Box Office Data:       2024 Olympic Medalists: This data is from        Dentists by State: This data is from .         Here are some other things you can do for each Excel file:   Generate a report based on the dataset.    Generate a PowerPoint presentation based on this dataset.     (For anything you ask Copilot to generate, check to see if what it generated is helpful.)  "
},
{
  "id": "sec-using-Copilot-to-learn-how",
  "level": "1",
  "url": "sec-using-Copilot-to-learn-how.html",
  "type": "Section",
  "number": "1.3",
  "title": "Using Copilot to Learn How to do Things in Excel or Generating Ideas for What to do",
  "body": " Using Copilot to Learn How to do Things in Excel or Generating Ideas for What to do   At the moment, Copilot in Excel cannot do everything we might want it to do. However, it can still be helpful for providing guidance if we are not sure how to do something in Excel.  It can also be useful for getting ideas about what to do with a dataset and for better understanding concepts related to what we're doing.  Use this link to open an Excel file in Office 365: Dentists by state  This data is from .   Go to File and create a copy of this file online.   Dentist Geographic Heat Map We want to create a geographic heat map showing the number of dentists per 100,000 residents in each state in the U.S. in 2021.    Ask Copilot to create a geographic heat map showing the number of dentists per 100,000 residents in each state in the U.S. in 2021.  Did it create a heat map?    Copilot probably did not create a heat map. Let's ask it how we would do it ourselves using the prompt below.   How do I create a geographic heat map for the number of dentists per 100,000 resident population in each state in 2021?   Follow the instructions it gives to create the heat map.     Dentists Help With Filtering Now we want to focus on what is happening in Colorado. We want to see how the number of dentists per 100,000 residents in Colorado changed from 2001 to 2021. Ask Copilot to Filter the table to only show rows that have a \"1\" in column M. Then apply the filter. Now we can go to Column I and choose to only show information for Colorado .  Dentists Help With Formulas and Concepts  Let's say we want to find the average estimate for dentists per 100,000 resident population in the year 2021 (year). Use the following prompt to do this:  How would I find the average value in column P for rows in which column M is equal to \"1\" and column N is equal to \"2021\"?    Now let's make a confidence interval for the average estimate for dentists per 100,000 resident population in the year 2021 (year).  (Note: ....comment on why this might not make a lot of sense to do here....)  Use the prompt below:   How would I make a confidence interval for the average value in column P for rows in which column M is equal to \"1\" and column N is equal to \"2021\"?   Here are some additional questions we could ask:   What is a confidence interval?    Why did the formula use 1.96?    What is a standard deviation?    What would change if we wanted to change the level of confidence to ?    Can you explain what the confidence interval means in the context of this problem?       "
},
{
  "id": "sec-using-Copilot-to-learn-how-3",
  "level": "2",
  "url": "sec-using-Copilot-to-learn-how.html#sec-using-Copilot-to-learn-how-3",
  "type": "Example",
  "number": "1.3.1",
  "title": "Dentist Geographic Heat Map.",
  "body": "Dentist Geographic Heat Map We want to create a geographic heat map showing the number of dentists per 100,000 residents in each state in the U.S. in 2021.    Ask Copilot to create a geographic heat map showing the number of dentists per 100,000 residents in each state in the U.S. in 2021.  Did it create a heat map?    Copilot probably did not create a heat map. Let's ask it how we would do it ourselves using the prompt below.   How do I create a geographic heat map for the number of dentists per 100,000 resident population in each state in 2021?   Follow the instructions it gives to create the heat map.    "
},
{
  "id": "sec-using-Copilot-to-learn-how-4",
  "level": "2",
  "url": "sec-using-Copilot-to-learn-how.html#sec-using-Copilot-to-learn-how-4",
  "type": "Example",
  "number": "1.3.2",
  "title": "Dentists Help With Filtering.",
  "body": "Dentists Help With Filtering Now we want to focus on what is happening in Colorado. We want to see how the number of dentists per 100,000 residents in Colorado changed from 2001 to 2021. Ask Copilot to Filter the table to only show rows that have a \"1\" in column M. Then apply the filter. Now we can go to Column I and choose to only show information for Colorado . "
},
{
  "id": "sec-using-Copilot-to-learn-how-5",
  "level": "2",
  "url": "sec-using-Copilot-to-learn-how.html#sec-using-Copilot-to-learn-how-5",
  "type": "Example",
  "number": "1.3.3",
  "title": "Dentists Help With Formulas and Concepts.",
  "body": "Dentists Help With Formulas and Concepts  Let's say we want to find the average estimate for dentists per 100,000 resident population in the year 2021 (year). Use the following prompt to do this:  How would I find the average value in column P for rows in which column M is equal to \"1\" and column N is equal to \"2021\"?    Now let's make a confidence interval for the average estimate for dentists per 100,000 resident population in the year 2021 (year).  (Note: ....comment on why this might not make a lot of sense to do here....)  Use the prompt below:   How would I make a confidence interval for the average value in column P for rows in which column M is equal to \"1\" and column N is equal to \"2021\"?   Here are some additional questions we could ask:   What is a confidence interval?    Why did the formula use 1.96?    What is a standard deviation?    What would change if we wanted to change the level of confidence to ?    Can you explain what the confidence interval means in the context of this problem?      "
},
{
  "id": "sec-describe-visualization",
  "level": "1",
  "url": "sec-describe-visualization.html",
  "type": "Section",
  "number": "2.1",
  "title": "Using Generative AI to Describe a Data Visualization",
  "body": " Using Generative AI to Describe a Data Visualization   In the following examples, we'll use generative AI to generate a description of an image. After generating the description, think about the following questions:     Is the image you used misleading in any way?    Is the description accurate?    Is there anything notable that the generated description does not mention\/include?    Does the description make sense?     Also think about what other questions you have based on the description that is given.   Practice generating a description Choose (or create) a visualization of data that you want to describe. Use either ChatGPT or Copilot to generate a description of the image. If you aren't sure what image to use, here are some that you can try:     This image is from       This image is from the budgeting software Monarch .       This data is from           Transfer Student Dashboard We can also use generative AI to summarize a dashboard and identify key insights instead of summarizing or describing one individual chart. Use Copilot or ChatGPT to summarize the dashboard shown in the image below:   This image is from   "
},
{
  "id": "sec-describe-visualization-3",
  "level": "2",
  "url": "sec-describe-visualization.html#sec-describe-visualization-3",
  "type": "Example",
  "number": "2.1.1",
  "title": "Practice generating a description.",
  "body": "Practice generating a description Choose (or create) a visualization of data that you want to describe. Use either ChatGPT or Copilot to generate a description of the image. If you aren't sure what image to use, here are some that you can try:     This image is from       This image is from the budgeting software Monarch .       This data is from          "
},
{
  "id": "sec-describe-visualization-4",
  "level": "2",
  "url": "sec-describe-visualization.html#sec-describe-visualization-4",
  "type": "Example",
  "number": "2.1.2",
  "title": "Transfer Student Dashboard.",
  "body": "Transfer Student Dashboard We can also use generative AI to summarize a dashboard and identify key insights instead of summarizing or describing one individual chart. Use Copilot or ChatGPT to summarize the dashboard shown in the image below:   This image is from  "
},
{
  "id": "sec-create-visualization",
  "level": "1",
  "url": "sec-create-visualization.html",
  "type": "Section",
  "number": "2.2",
  "title": "Using Generative AI to Create Data Visualizations",
  "body": " Using Generative AI to Create Data Visualizations   The analysis we can do and the visualizations we can create often depend on what version of a particular chatbot we are using. Some won't do much analysis with the free versions. (ChatGPT currently has Python incorporated into it and can do some of the analysis\/creating of visualizations using Python, but the free version is limited in what it will do in one day.)  In the examples below, think about what visualization would make sense to create to visualize some aspect(s) of the dataset. (It might help to ask some questions about the data before deciding what visualization to create.)  Use either ChatGPT or Copilot to try to create that visualization. Think about the following questions as you view any images\/charts it creates:   Is the chart misleading in any way?    Is the chart accurate?    Is there anything notable that the generated chart\/image does not include?    Does the chart make sense? (Are axes labeled\/is it clear what is being shown?)       2024 Paris Olympics The file below contains data for medalists in the 2024 Paris Olympics. This data is from   Think about what visualizations would make sense to create with this data and create visualizations for a few different aspects of the data.  US Home Sales The file NewHouseSalesUS.xls contains data for new, privately-owned, residential housing units sold and for sale in the United States between 2002 to the present.   (This file can also be found at .)  Here are ideas for visualizations you can create:   Make a histogram showing the number of homes sold in each price range in a given year.    Make a line chart showing how the number of homes in the to price range has changed from 2002 to 2022.      Colorado Childcare Data The file below has data on licensed childcare facilities in Colorado:   Maddison Project Database  The Maddison Project Database provides information on comparative economic growth and income levels over the very long run.  Use the link below to download the Maddison Project Database as an Excel file for the period up to 2022:   Think about what visualizations would make sense to create with this data and create visualizations for a few different aspects of the data.  Domestic Box Office Download the file below showing box office totals for new movie releases starting in 2022 through mid-September 2024.   Create at least one visualization showing some aspect of this data.  Practice with other datasets Choose a larger dataset that you would like to analyze. Try to use either ChatGPT or Copilot to create a visualization of the data. Here are links to sites with datasets that you could use:    Data is Plural      The English Women's Football (EWF) Database      "
},
{
  "id": "sec-create-visualization-3",
  "level": "2",
  "url": "sec-create-visualization.html#sec-create-visualization-3",
  "type": "Example",
  "number": "2.2.1",
  "title": "2024 Paris Olympics.",
  "body": "2024 Paris Olympics The file below contains data for medalists in the 2024 Paris Olympics. This data is from   Think about what visualizations would make sense to create with this data and create visualizations for a few different aspects of the data. "
},
{
  "id": "sec-create-visualization-4",
  "level": "2",
  "url": "sec-create-visualization.html#sec-create-visualization-4",
  "type": "Example",
  "number": "2.2.2",
  "title": "US Home Sales.",
  "body": "US Home Sales The file NewHouseSalesUS.xls contains data for new, privately-owned, residential housing units sold and for sale in the United States between 2002 to the present.   (This file can also be found at .)  Here are ideas for visualizations you can create:   Make a histogram showing the number of homes sold in each price range in a given year.    Make a line chart showing how the number of homes in the to price range has changed from 2002 to 2022.     "
},
{
  "id": "sec-create-visualization-5",
  "level": "2",
  "url": "sec-create-visualization.html#sec-create-visualization-5",
  "type": "Example",
  "number": "2.2.3",
  "title": "Colorado Childcare Data.",
  "body": "Colorado Childcare Data The file below has data on licensed childcare facilities in Colorado:  "
},
{
  "id": "sec-create-visualization-6",
  "level": "2",
  "url": "sec-create-visualization.html#sec-create-visualization-6",
  "type": "Example",
  "number": "2.2.4",
  "title": "Maddison Project Database.",
  "body": "Maddison Project Database  The Maddison Project Database provides information on comparative economic growth and income levels over the very long run.  Use the link below to download the Maddison Project Database as an Excel file for the period up to 2022:   Think about what visualizations would make sense to create with this data and create visualizations for a few different aspects of the data. "
},
{
  "id": "sec-create-visualization-7",
  "level": "2",
  "url": "sec-create-visualization.html#sec-create-visualization-7",
  "type": "Example",
  "number": "2.2.5",
  "title": "Domestic Box Office.",
  "body": "Domestic Box Office Download the file below showing box office totals for new movie releases starting in 2022 through mid-September 2024.   Create at least one visualization showing some aspect of this data. "
},
{
  "id": "sec-create-visualization-8",
  "level": "2",
  "url": "sec-create-visualization.html#sec-create-visualization-8",
  "type": "Example",
  "number": "2.2.6",
  "title": "Practice with other datasets.",
  "body": "Practice with other datasets Choose a larger dataset that you would like to analyze. Try to use either ChatGPT or Copilot to create a visualization of the data. Here are links to sites with datasets that you could use:    Data is Plural      The English Women's Football (EWF) Database     "
},
{
  "id": "sec-create-dashboards",
  "level": "1",
  "url": "sec-create-dashboards.html",
  "type": "Section",
  "number": "2.3",
  "title": "Using Generative AI to Create Dashboards",
  "body": " Using Generative AI to Create Dashboards   Generative AI can be helpful in a number of ways when creating dashboards in Tableau. Below are some ways you can use generative AI to create a dashboard.   Ideas and Planning    Clarify goals: brainstorm and refine what your dashboard should show based on your audience and use case    Visualization suggestions: Use it to recommend appropriate chart types (bar charts, line graphs, etc.) based on the data and the story you want to tell.      Data Preparation Help    Cleaning and shaping data: It can guide you on how to structure your data in Excel, SQL, or Tableau Prep for smoother integration into Tableau.    Calculated fields: Stuck on a Tableau formula? It can help write or debug calculated fields using Tableau’s syntax      Design Guidance    Layout tips: It can advise on layout structure, font size, color use, and interactivity to make the dashboard user-friendly.      Technical Assistance    Walkthroughs: Step-by-step instructions for connecting data, creating views, filters, parameters, or using Tableau-specific features like Actions and Dashboard Objects.    Troubleshooting: Describe your issue (e.g., filters not working across sheets), and it can help diagnose and resolve it.      Automation and Advanced Features    Scripting: It can help you write Python or R scripts using Tableau’s integration with TabPy or Rserve.    Tableau extensions and APIs: Want to extend Tableau’s functionality with JavaScript or connect to external systems? It can help walk you through it.      Documentation and Presentation    Generate explanations: It can create clear, user-friendly explanations for your dashboard or write descriptions for each visualization.    Presentation prep: It can help you draft what to say when you present your dashboard or write up an executive summary.          If you do not have Tableau installed on your computer, you can use the online version of Tableau Public for free to create dashboards for the datasets below if you make an account: Tableau Public Sign-in\/Account Creation    2024 Paris Olympics The file below contains data for medalists in the 2024 Paris Olympics. This data is from   Think about what visualizations would make sense to create with this data and create visualizations for a few different aspects of the data.   Use generative AI to brainstorm and refine what a dashboard using this data should show based on a particular audience.    Use generative AI to recommend appropriate chart types based on the data.    Create a dashboard in Tableau and use generative AI as needed for technical assistance.    US Home Sales The file NewHouseSalesUS.xls contains data for new, privately-owned, residential housing units sold and for sale in the United States between 2002 to the present.   (This file can also be found at .)   Use generative AI to brainstorm and refine what a dashboard using this data should show based on a particular audience.    Use generative AI to recommend appropriate chart types based on the data.    Create a dashboard in Tableau and use generative AI as needed for technical assistance.    Colorado Childcare Data The file below has data on licensed childcare facilities in Colorado:   Maddison Project Database  The Maddison Project Database provides information on comparative economic growth and income levels over the very long run.  Use the link below to download the Maddison Project Database as an Excel file for the period up to 2022:     Use generative AI to brainstorm and refine what a dashboard using this data should show based on a particular audience.    Use generative AI to recommend appropriate chart types based on the data.    Create a dashboard in Tableau and use generative AI as needed for technical assistance.    Domestic Box Office Download the file below showing box office totals for new movie releases starting in 2022 through mid-September 2024.     Use generative AI to brainstorm and refine what a dashboard using this data should show based on a particular audience.    Use generative AI to recommend appropriate chart types based on the data.    Create a dashboard in Tableau and use generative AI as needed for technical assistance.    Practice with other datasets Choose a larger dataset that you would like to analyze. Create a dashboard in Tableau after using generative AI to get ideas for your dashbaord and for technical assistance along the way. Here are links to sites with datasets that you could use:    Data is Plural      The English Women's Football (EWF) Database      "
},
{
  "id": "sec-create-dashboards-3",
  "level": "2",
  "url": "sec-create-dashboards.html#sec-create-dashboards-3",
  "type": "Note",
  "number": "2.3.1",
  "title": "",
  "body": " If you do not have Tableau installed on your computer, you can use the online version of Tableau Public for free to create dashboards for the datasets below if you make an account: Tableau Public Sign-in\/Account Creation   "
},
{
  "id": "sec-create-dashboards-4",
  "level": "2",
  "url": "sec-create-dashboards.html#sec-create-dashboards-4",
  "type": "Example",
  "number": "2.3.2",
  "title": "2024 Paris Olympics.",
  "body": "2024 Paris Olympics The file below contains data for medalists in the 2024 Paris Olympics. This data is from   Think about what visualizations would make sense to create with this data and create visualizations for a few different aspects of the data.   Use generative AI to brainstorm and refine what a dashboard using this data should show based on a particular audience.    Use generative AI to recommend appropriate chart types based on the data.    Create a dashboard in Tableau and use generative AI as needed for technical assistance.   "
},
{
  "id": "sec-create-dashboards-5",
  "level": "2",
  "url": "sec-create-dashboards.html#sec-create-dashboards-5",
  "type": "Example",
  "number": "2.3.3",
  "title": "US Home Sales.",
  "body": "US Home Sales The file NewHouseSalesUS.xls contains data for new, privately-owned, residential housing units sold and for sale in the United States between 2002 to the present.   (This file can also be found at .)   Use generative AI to brainstorm and refine what a dashboard using this data should show based on a particular audience.    Use generative AI to recommend appropriate chart types based on the data.    Create a dashboard in Tableau and use generative AI as needed for technical assistance.   "
},
{
  "id": "sec-create-dashboards-6",
  "level": "2",
  "url": "sec-create-dashboards.html#sec-create-dashboards-6",
  "type": "Example",
  "number": "2.3.4",
  "title": "Colorado Childcare Data.",
  "body": "Colorado Childcare Data The file below has data on licensed childcare facilities in Colorado:  "
},
{
  "id": "sec-create-dashboards-7",
  "level": "2",
  "url": "sec-create-dashboards.html#sec-create-dashboards-7",
  "type": "Example",
  "number": "2.3.5",
  "title": "Maddison Project Database.",
  "body": "Maddison Project Database  The Maddison Project Database provides information on comparative economic growth and income levels over the very long run.  Use the link below to download the Maddison Project Database as an Excel file for the period up to 2022:     Use generative AI to brainstorm and refine what a dashboard using this data should show based on a particular audience.    Use generative AI to recommend appropriate chart types based on the data.    Create a dashboard in Tableau and use generative AI as needed for technical assistance.   "
},
{
  "id": "sec-create-dashboards-8",
  "level": "2",
  "url": "sec-create-dashboards.html#sec-create-dashboards-8",
  "type": "Example",
  "number": "2.3.6",
  "title": "Domestic Box Office.",
  "body": "Domestic Box Office Download the file below showing box office totals for new movie releases starting in 2022 through mid-September 2024.     Use generative AI to brainstorm and refine what a dashboard using this data should show based on a particular audience.    Use generative AI to recommend appropriate chart types based on the data.    Create a dashboard in Tableau and use generative AI as needed for technical assistance.   "
},
{
  "id": "sec-create-dashboards-9",
  "level": "2",
  "url": "sec-create-dashboards.html#sec-create-dashboards-9",
  "type": "Example",
  "number": "2.3.7",
  "title": "Practice with other datasets.",
  "body": "Practice with other datasets Choose a larger dataset that you would like to analyze. Create a dashboard in Tableau after using generative AI to get ideas for your dashbaord and for technical assistance along the way. Here are links to sites with datasets that you could use:    Data is Plural      The English Women's Football (EWF) Database     "
},
{
  "id": "sec-Calculated-Fields-Tableau",
  "level": "1",
  "url": "sec-Calculated-Fields-Tableau.html",
  "type": "Section",
  "number": "2.4",
  "title": "Using Generative AI to Create Calculated Fields in Tableau",
  "body": " Using Generative AI to Create Calculated Fields in Tableau   If you use Tableau, then you might have practice creating calculating fields in Tableau. The syntax in Tableau is different than in Excel, and you might want to create calculated fields in Tableau but not know the syntax for what you want to do.   2023 National Survey of Children’s Health  Use the link below to open and edit a Tableau workbook in Tableau Public that includes data from the 2023 National Survey of Children’s Health. Here is a link to information about the dataset: Link to information about variables   (If you have not used Tableau Public before, you will need to create a Tableau Public account.)   Link to Blank Census Kids Data Workbook on Tableau Public    We want to understand the proportion of children who need or currently take medication. The relevant field in the survey is labeled C_K2Q10 . We want to find the number of responses with a 1 and divide by the total number of responses. You might have done things like this in Excel, but Tableau is a little different. Use ChatGPT or Copilot and ask If I have a variable labeled C_K2Q10, how would I calculate the proportion of responses that were a 1 in a calculated field in Tableau?  Check to see if you get the answer below, and then create this calculated field in Tableau.  SUM(IF [C K2Q10]=1 THEN 1 ELSE 0 END)\/COUNT([C K2Q10])   Use the calculated field you created above to create a geographic heat map showing the proportion of children who need or currently take medication.  Now create a calculated field for the proportion of children who need or get special therapy such as physical, occupational, or speech therapy. (This is in C_K2Q19 .)  SUM(IF [C K2Q19]=1 THEN 1 ELSE 0 END)\/COUNT([C K2Q19])   Use the calculated field you created above to create a geographic heat map showing the proportion of children who need or get special therapy such as physical, occupational, or speech therapy.   "
},
{
  "id": "sec-Calculated-Fields-Tableau-3",
  "level": "2",
  "url": "sec-Calculated-Fields-Tableau.html#sec-Calculated-Fields-Tableau-3",
  "type": "Example",
  "number": "2.4.1",
  "title": "2023 National Survey of Children’s Health.",
  "body": "2023 National Survey of Children’s Health  Use the link below to open and edit a Tableau workbook in Tableau Public that includes data from the 2023 National Survey of Children’s Health. Here is a link to information about the dataset: Link to information about variables   (If you have not used Tableau Public before, you will need to create a Tableau Public account.)   Link to Blank Census Kids Data Workbook on Tableau Public    We want to understand the proportion of children who need or currently take medication. The relevant field in the survey is labeled C_K2Q10 . We want to find the number of responses with a 1 and divide by the total number of responses. You might have done things like this in Excel, but Tableau is a little different. Use ChatGPT or Copilot and ask If I have a variable labeled C_K2Q10, how would I calculate the proportion of responses that were a 1 in a calculated field in Tableau?  Check to see if you get the answer below, and then create this calculated field in Tableau.  SUM(IF [C K2Q10]=1 THEN 1 ELSE 0 END)\/COUNT([C K2Q10])   Use the calculated field you created above to create a geographic heat map showing the proportion of children who need or currently take medication.  Now create a calculated field for the proportion of children who need or get special therapy such as physical, occupational, or speech therapy. (This is in C_K2Q19 .)  SUM(IF [C K2Q19]=1 THEN 1 ELSE 0 END)\/COUNT([C K2Q19])   Use the calculated field you created above to create a geographic heat map showing the proportion of children who need or get special therapy such as physical, occupational, or speech therapy.  "
},
{
  "id": "sec-viz-extension",
  "level": "1",
  "url": "sec-viz-extension.html",
  "type": "Section",
  "number": "2.5",
  "title": "Using Generative AI When You Aren’t Sure How to Create a Visualization in Tableau",
  "body": " Using Generative AI When You Aren't Sure How to Create a Visualization in Tableau   Sometimes you might want to create a certain visualization in Tableau, but if it doesn't show up as one of the recommended options, you might not be sure what to do. We can use Generative AI to quickly learn the steps to create visualizations!   Sankey Chart Using Viz Extension We want to use Tableau to create a Sankey chart for the 2023 NBA playoff data below to get an image like the one shown.     Here is a link where you can access a Tableau workbook connected to this Excel file and edit it in Tableau Public:  Link to Tableau Public workbook  Ask Copilot how to create a Sankey chart for this data in Excel. Try to use the instructions to create this chart in Tableau. Questions to consider:   Are the steps given by Copilot correct\/helpful?    Is this the best way to visualize this data?    Is there anything confusing about this visualization?    What is wrong with the way colors are being used in this chart? (How could the chart be improved?)     "
},
{
  "id": "sec-viz-extension-3",
  "level": "2",
  "url": "sec-viz-extension.html#sec-viz-extension-3",
  "type": "Example",
  "number": "2.5.1",
  "title": "Sankey Chart Using Viz Extension.",
  "body": "Sankey Chart Using Viz Extension We want to use Tableau to create a Sankey chart for the 2023 NBA playoff data below to get an image like the one shown.     Here is a link where you can access a Tableau workbook connected to this Excel file and edit it in Tableau Public:  Link to Tableau Public workbook  Ask Copilot how to create a Sankey chart for this data in Excel. Try to use the instructions to create this chart in Tableau. Questions to consider:   Are the steps given by Copilot correct\/helpful?    Is this the best way to visualize this data?    Is there anything confusing about this visualization?    What is wrong with the way colors are being used in this chart? (How could the chart be improved?)    "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
