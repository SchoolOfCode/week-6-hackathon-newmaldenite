# Underground, Overground?

A Skill-Development focused Hackathon project for Week 6 of School Of Code Bootcamp18.



## Task and Planning

Task: Make your own Codewars Style Challenge

Reasoning: This week has been focused on Testing and QA - so the task asks us to set a programming challenge for our bootcamp colleagues - but most importantly, to write accompanying unit tests to test the ensuing code.

Plan: As we have been discussing Test Driven Development (TDD) this week, this seems an appropriate place to implement some. However, I'd also like to design a test that encourages people to find an Operator or Method that they may not have used before. Though, obviously I can't know that so it'll just be something that *I* haven't used before :D


## Ideation!

During team discussion, we wanted to find something we all found at least a bit engaging as a overall 'Theme' for our groups Challenges, even though we were each developing individual Challenges. We settled on London, and a theme of facts about the Underground.

https://www.sableinternational.com/blog/50-interesting-facts-about-the-london-underground#:~:text=There%20are%20only%20two%20Tube,the%20most%20platforms%2C%20at%2010

The next step: find something useful as a 'target function to learn'. Looking at:

https://dev.to/ppiippaa/some-cool-javascript-features-from-the-last-5-years-4alp

I quickly settled on Optional Chaining (?.) - as I hadn't used it and it would have been quite useful during some of our earlier weeks when we were querying Javascript objects with missing entries and throwing a lot of errors...

So, what to query? I quite liked the fact about a number of stations having no above-ground building, so thought I'd look for a dataset about Underground stations. As I couldn't find one that focused on pure station facts, I decided to use ChatGPT to generate a Javascript object from the Wikipedia page:

https://en.wikipedia.org/wiki/List_of_London_Underground_stations


