# pitch-a-tent

Pitch-a-tent is a state campsite search tool that uses the National Park Service campsite API. 
When a state is searched using the drop-down menu; the site will list four campsites in that state; along with weather in three major cities across that state.

# requirements
 
Project Requirements
  
01 Must use at least two server-side APIs
02 Must use a CSS framework other than Bootstrap
03 Must use client-side storage to store persistent data
04 Must have a polished, mobile-first UI
05 Must meet good quality coding standards (indentation, scoping, naming, etc.) Does NOT use alerts, confirms, or prompts (look into modals).
06 Does NOT use alerts, confirms, or prompts (look into modals).
07 Must be deployed to GitHub Pages
08 Must be interactive (i.e: accept and respond to user input)


### repository: https://github.com/adamjuwig/pitch-a-tent
### website: https://pitch-a-tent.netlify.app/
### screen shots images: [!img pitch-a-tent/pitchsampleimages/
### ![alt text](https://github.com/adamjuwig/pitch-a-tent/blob/main/pitchsampleimages/pitchdemo00.png)

## Deployment

The site is deployed on Netlify. API requests go through Netlify Functions in `netlify/functions/` so the keys are never sent to the browser. Set these environment variables in the Netlify site settings:

- `NPS_API_KEY`: from https://www.nps.gov/subjects/developer/get-started.htm
- `OPENWEATHER_API_KEY`: from https://openweathermap.org/api

To run locally with the functions, use `netlify dev` (Netlify CLI) with the variables in a git-ignored `.env` file.
