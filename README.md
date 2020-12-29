## Budget Manager
https://simplebudgetmanager.herokuapp.com/
Fill in a yearly budget, have it split equally throughout the year, fill out the individual month
expenses, see how much is remaining of the current month, edit expenses - all being saved locally on
your browser at the hosted website as linked above or test locally by doing the following.

## Test Locally
- Clone this repository at your desired location
- cd to ```budget-manager``` folder
- Install dependencies and start, ``` npm i "&&" npm start ```
- You're all set, go to: ```http://localhost:3000/```

# Article
- [Contents of App](#contents)
- [Tech Usage and Reasoning](#tech-usage-and-reasoning)
- [Challenges Faced](#challenges-faced)
- [Design](#design)
- [Full Description](#full-description)
- [Contact Options](#get-in-touch-with-me)

# Contents
- Fill in a yearly budget
- Get your budget equally divided into twelve months
- Add expenses for each individual month
- Ability to edit/delete expenses
- See how much is remaining of a monthly budget
- All data is stored locally and secure (localStorage API)

# Tech Usage and Reasoning
- React
React: During the planning phase for this projects, I realised I would be building a project that has
many repeating blocks (e.g. all 12-months, expense, form) and found React as a brilliant framework
for my exact challenge. By using React I could make sure to keep it easy maintainable, scalable and
extensible.

# Challenges Faced
The origin of this project idea came when I reached out to a friend of me that works on a startup, and
I presented him with the opportunity to express a hypothetical software he would have liked to use
in his work, but which he did not have access to at that time. When involving yourself into a new
sector there are a lot of new topics and information to digest, his wish was to have a financial tool to
manage his expenses - without all the confusion that was on the more commonly used expense
management tools available out there.

For me the challenge started right there, how could I help my friend with a tool that does everything
he needs it to do, at the same time keeping it inside his range of capability - I did not want to make it
cause more problems than it solved, logically.

## Solve the problem, keep the Simplicity
As the title states, this was exactly where it began. I wanted to make the tool so easily
understandable that no explanation was needed, a design that needs clarification is no good. Keeping
it minimal, I made sure that each step should have only what it really needs to have, no extra
features - for now. Making the landingpage a simple form where you submit your budget, with the
submit taking you to your divided budget split of a calender year, displaying each month, with a
button allowing to add expenses to a month.

# Design
As mentioned above in the ["Challenges Faced"](#challenges-faced) section, the intention between
me and the customer I created the project for was maintaining a simple UX/UI throughout the usage.
Therefore the colors, font-usage, button sizes/placements, as well icons to signalify actions such as
"Go back", "Delete Expenses of Month", "Edit Expense", "Reset Budget" and more.
Along with the color usage and icons to contribute to a smooth experience, there are also added
needed confirmations on actions that has irreversible outcomes (e.g. deleting expense). See below to
see illustrations, a responsive design to fit across different platforms.

## Reponsive Design
<p align="center">
<img src="https://i.imgur.com/NyMmtDc.png" width="240px"/>
<img src="https://i.imgur.com/wgDZkvE.png" width="500px"/>
</p>

## Responsiveness
Going into the design of this I was focusing on responsiveness across platforms, the features should
not be restricted to only suit one platform group. If you are working from an office, your living room,
on a desktop or a tablet - it should feel the same and be a problem-free process. I have even created
an android-version which you can see the repository to [here][androidrepo].

# Full Description
The possibilities of managing economy and especially budgets is a very common task among many.
The opportunities and choices of management-tools which content is consisting of a range from
simple to more advanced features. 

However, in this project I was taking on the task of simplifying this
process, users who are fresh into startups have a lot of new responsobilities to digest, and with my
*Budget Manager* I'm hoping I can contribute by creating this tool being so convenient and basic
that it reduces complications and eases your work. With intent this is designed to be easy, with few
possibilities for confusing - and therefore logically lacking a wide variety of features. My goal is to be
a helpful starting tool, or even being a permanent choice if I serve the needs you have.

# Get in Touch With me:
[<img align="left" style="margin-left: 10px;" alt="codeSTACKr | LinkedIn" width="40px"
src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" />][linkedin]
[<img align="left" style="margin-left: 10px;" alt="codeSTACKr.com" width="40px"
src="https://raw.githubusercontent.com/iconic/open-iconic/master/svg/globe.svg" />][website]
<a href="mailto:bragecontact@gmail.com"><img width="40px" className="homepage__contact"
alt="gmail" src="https://i.imgur.com/mo4E0Fb.png"/></a>

### Creator
MIT License
Copyright (c) 2020 Brage Røsberg

[linkedin]: https://www.linkedin.com/in/brage-rosberg/
[website]: https://www.bragerosberg.com
[androidrepo]: https://github.com/bragerosberg/budget-manager-reactnative
