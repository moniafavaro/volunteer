# Volunteer

## Goal

Design a website for posting and applying for volunteering jobs. A company can post jobs and a volunteer can apply for them. 

## Timeframe

Timeframe: 1 week.

## Inspiration

At the end of the course we all started to talk about finding a job, then I realised that I would like to do a volunteer job and it would be very nice to go to a website with only volunteering jobs.

The design was "inspired" by `indeed`.

## Project Overview

https://user-images.githubusercontent.com/60261970/149831611-3afd8d48-8161-49c2-bd0b-f26753d624f8.mov

## Deployment

to be done

# Getting Started

I started to think about this website and already had an image on my mind of how I wanted it to be.

I had a page on Notion to do my pseudocode and one on Figma to do my wireframe. 

Once I was signed off I started coding the backend and having the CRUD all working, then I began with frontend and styling.


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

As we learnt through the course, it is best practice to start with a pseudocode.

<p align='center'>
    <img width='300' height='450' src='https://user-images.githubusercontent.com/60261970/149832132-efb69813-6742-4a8c-83af-821de8f5802e.png'>
  <img width='300' height='450' src='https://user-images.githubusercontent.com/60261970/149832135-97e7ede5-c004-49f7-b6a6-5d9beb82b443.png'>
</p>

Once the pseudocode was done I started with the wireframe and decided what I wanted to add to this website.

<p align='center'>
    <img width='320' height='260' src='https://user-images.githubusercontent.com/60261970/148087354-37e07b49-489f-4423-b691-e2244ce7fcf0.png'>
  <img width='320' height='260' src='https://user-images.githubusercontent.com/60261970/148087371-a8e0aa21-fdfa-4302-93a1-a4521ef4b1aa.png'>
  <img width='310' height='260' src='https://user-images.githubusercontent.com/60261970/148087425-3861bf98-a608-4a8f-a6f5-81c46a5a3412.png'>
</p>


And I also did the diagram for one-to-many and many-to-many relationships:

<p align='center'>
    <img width='400' height='260' src='https://user-images.githubusercontent.com/60261970/148089227-56b8765b-896b-406b-8782-38d55d9f3da1.png'>
</p>


## Build

The first pages that I added was the login and register:
<p align='center'>
    <img width='400' height='260' src='https://user-images.githubusercontent.com/60261970/148087522-02f9eaf9-0285-43eb-b09e-b5dbc2f6120a.png'>
  <img width='400' height='260' src='https://user-images.githubusercontent.com/60261970/148087532-25815a2a-801d-48ab-967e-11467421e45e.png'>
</p>


After that I did the home and profile page to the company and volunteer.

That was my MVP.


## Known Bugs

* When the user creates an account as a Company, after the login for some reason appears that the user is on the Volunteer home page.

## Challenges

* Building a full stack application on your own for the first time is something to be proud of. Problem solving and taking time to think through the errors has for sure given me some valuable experience prior to entering the industry.

## Wins

* For me, my biggest win was to learn how to implement one-to-many and many-to-many relationships.
* Understanding serializers, translating django models appropriately for sending and receiving data.
* Been able to understand and use correctly many-to-many relationships.

## Future Enhancements

* Make my search bar useful, so volunteers can search for a job or company.

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

On the volunteer home page you can see all the open jobs and apply for then with just one click on the apply button.

https://user-images.githubusercontent.com/60261970/148089011-df3e73ba-1381-4fe9-a774-3e0f857c5b9d.mov

After that it is up to the company to contact the volunteer and the volunteer to answer to the company.
