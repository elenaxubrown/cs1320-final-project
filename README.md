# cs1320-final-project
This is the final project for Brown's CSCI 1320 course. 

## Overview: 
Our project aims to build a website for Sustainable International Medical Relief Organization (SIMRO), which is an NGO (non-governmental organization) based in Turkey. Their goal is to rebuild the Syrian Healthcare system. 

## Background: 
As many hospitals were destroyed during the war (still ongoing), the people in Syria currently do not have access to essential medical treatment. The founder of the NGO, Dr. Khaled Almilaji, is seeking to raise money (1) to build more underground hospitals and (2) provide healthcare for Syrian children in need. 

## Our Task: 
We want to improve the current website that (1) publicizes updates about the hospital, (2) receives donations, and (3) keeps donors informed on current news. 

We will have five main sections for the website: Home, Background, Founder Introduction, News Feed, and Donation Sections. We want the users to have a general understanding of the current situation of Syria’s medical care system, and we will provide a quick link to the donate page to enable monetary donations in a timely fashion. 

## Specifics: 
The background about Syria War will simply be static information on our website, so we don’t need to use the database for this part. We plan to fetch the information about the Avicenna Hospital from BBC, CNN, and The Guardian websites, which will be done in our backend server, whenever users click the information section. We also automate several processes via a sign-up process that asks for username, email address, and password. As we care for user security, we will definitely use the salt hash to store users’ passwords with all of their other information in the database. When users click a donate link, we will generate thank-you letters to be sent automatically to the users. Through our website, we will send an update email quarterly to all users who signed up on our website.

As per Professor Reiss’s suggestion, we will mostly likely cash every 10-15 minutes instead of whenever a user clicks the information section.
