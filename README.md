# Volunteer

## Goal

Design a website for posting and applying for volunteering jobs. A company can post jobs and a volunteer can apply for them. 


## Timeframe

Timeframe: 1 week.


## Project Overview

My fourth project on the Software Engineering Immersive course at General Assembly and my first fullstack project.

At the end of the course we all started to talk about finding a job, then I realised that I would like to do a volunteer job and it would be very nice to go to a website with only volunteering jobs.

The design was "inspired" by `indeed`.

https://user-images.githubusercontent.com/60261970/149831611-3afd8d48-8161-49c2-bd0b-f26753d624f8.mov


## Deployment

to be done

# Getting Started

1. Clone or download the repo in your CLI.
2. Navigate into the shell with `pipenv shell`.
3. Open the backend folder and run the server with `python3 manage.py runserver`.
4. Change to frontend folder and run `npm start`.


## Technologies Used

* Python
* Django
* JavaScript
* ReactJS
* SASS
* Bootstrap
* Google Fonts
* VS Code
* Chrome
* Git and GitHub


## Planning and Pseudocode

I started to think about this website and already had an image on my mind of how I wanted it to be.

As we learnt through the course, it is best practice to start with a pseudocode and I used Notion for that.

<p align='center'>
    <img width='300' height='450' src='https://user-images.githubusercontent.com/60261970/149832132-efb69813-6742-4a8c-83af-821de8f5802e.png'>
  <img width='300' height='450' src='https://user-images.githubusercontent.com/60261970/149832135-97e7ede5-c004-49f7-b6a6-5d9beb82b443.png'>
</p>

Once the pseudocode was done I started with the wireframe, I used Figma, and decided what I wanted to add to this website.

<p align='center'>
    <img width='320' height='220' src='https://user-images.githubusercontent.com/60261970/148087354-37e07b49-489f-4423-b691-e2244ce7fcf0.png'>
  <img width='320' height='220' src='https://user-images.githubusercontent.com/60261970/148087371-a8e0aa21-fdfa-4302-93a1-a4521ef4b1aa.png'>
  <img width='310' height='220' src='https://user-images.githubusercontent.com/60261970/148087425-3861bf98-a608-4a8f-a6f5-81c46a5a3412.png'>
</p>


And I also did the diagram for one-to-many and many-to-many relationships:

<p align='center'>
    <img width='400' height='260' src='https://user-images.githubusercontent.com/60261970/148089227-56b8765b-896b-406b-8782-38d55d9f3da1.png'>
</p>

Once I was signed off I started coding.


## Build

### Backend

The code piece that I like the most while using Django and Python was models, and learning how to use One-To-Many and Many-To-Many relationships.

* I did one model for each relationship that I wanted on my project.

    * Company, Job and Volunteer models has fields that the database will use.
    * Company and Volunteer have one-to-one field to specify that each one has their own Id.

    <p align='center'>
        <img width='750' height='200' src='https://user-images.githubusercontent.com/60261970/149973500-f02531ae-dd53-4d8b-b28b-b514547076f8.png'>
    </p>

    * Volunteer have many-to-many relationship with Job, meaning that one Volunteer can have many jobs and one Job can have many volunteers.

    <p align='center'>
        <img width='750' height='200' src='https://user-images.githubusercontent.com/60261970/149973511-b2148ffc-43fb-4e9e-bb8f-058abfa335de.png'>
    </p>

    * Job have a foreignKey to specify which company added that job.
    
    <p align='center'>
         <img width='750' height='200' src='https://user-images.githubusercontent.com/60261970/149973518-9d244f5b-679f-453f-80f5-ba908455cce0.png'>
    </p>


### Frontend

I really like frontend and styling, so this was my favourite part in this project.

* The first pages that I added was the register and login.

    * Doing the Register page was a bit challenging, because I wanted in a way and couldn't figure it out for a long time, but manage to do it.
    * At the end I finish with this code, here the function will check for `token`, `username`, `userId`, and if the radio button has been chosen as 'company' or 'volunteer'. This radio button will determine which homepage and profile page will be displayed.
    
    <p align='center'>
        <img width='400' height='260' src='https://user-images.githubusercontent.com/60261970/149976541-c68a50b5-b6cf-4e2a-b28a-1e87b41a5e58.png'>
    </p>

    * This is how it looks like:

<p align='center'>
  <img width='400' height='260' src='https://user-images.githubusercontent.com/60261970/148087532-25815a2a-801d-48ab-967e-11467421e45e.png'>
    <img width='400' height='260' src='https://user-images.githubusercontent.com/60261970/148087522-02f9eaf9-0285-43eb-b09e-b5dbc2f6120a.png'>
</p>


## Known Bugs

* When the user creates an account as a Company, after the login for some reason appears that the user is on the Volunteer home page.


## Challenges

* Building a full stack application on your own for the first time is something to be proud of. Problem solving and taking time to think through the errors has for sure given me some valuable experience prior to entering the industry.


## Wins

* For me, my biggest win was to learn how to implement one-to-many and many-to-many relationships.
* Understanding serializers, translating django models appropriately for sending and receiving data.
* Being able to understand and use correctly many-to-many relationships.


## Future Enhancements

* Make my search bar useful, so volunteers can search for a job or company.
* Add more styling on Register and Login page.
* Styling on home page.


## Key Learnings

* Django, and how useful it can be.
* Entity Relationship Diagrams for visualising tabular data and relationships.
* One-to-many VS many-to-many relationships


## How to Use it

You are able to register as a company (who can post jobs) or as a volunteer (who can apply for jobs).

If you register as a company and login you will be redirected to the company profile, where you can add the description of your company.

https://user-images.githubusercontent.com/60261970/148088880-c9f9ee34-274f-476d-96c6-14ac8d75bccd.mov

When you as a company go to the home page you are able to add opening jobs and/or close a job. You can also see all the volunteers that apply for a job.

If you register as a volunteer and login you will be redirected to the volunteer profile, where you can add your information like phone number and CV.

https://user-images.githubusercontent.com/60261970/148088960-3ff74f6f-ba7a-4ba1-872d-324339bfc05c.mov

On the volunteer home page you can see all the open jobs and apply for them with just one click on the apply button.

https://user-images.githubusercontent.com/60261970/148089011-df3e73ba-1381-4fe9-a774-3e0f857c5b9d.mov

After that it is up to the company to contact the volunteer and the volunteer to answer to the company.
