## 🎊 Task Description:

Our company is focused on building websites based on Cricket. Currently, we are in search of a MERN Stack developer to develop our upcoming website.

### 🧮 Website Theme:

The "Dream 11" website aims to create a comprehensive user experience centered around fantasy cricket. The core functionality of this platform revolves around user interaction with players and teams. When a user visits the website, the first step is to select a cricket-playing country from a list of available options. This choice sets the stage for the subsequent user experience.

Once a country is selected, the website will display a list of players belonging to that particular national cricket team. This player roster will feature basic information about each player, enabling users to browse and explore their options. This initial view provides users with a snapshot of the available talent pool for their dream team.

Upon selecting a player's name from the list, users can access detailed player profiles. These profiles include comprehensive information about the player, such as their career statistics, performance history, and other relevant details. This feature is designed to help users make informed decisions when selecting players for their dream team.

The dream team creation process is at the heart of the "Dream 11" experience. Users have the freedom to handpick players from the available pool to form their dream cricket team. This involves adding players they believe will perform well in real-life cricket matches. Additionally, the platform allows users to remove players from their dream team if they wish to make changes or adjustments.

User engagement and participation are key aspects of the "Dream 11" website, with the goal of offering an immersive and customizable fantasy cricket experience. By combining the ability to select a country, explore player information, create a dream team, and make player additions and deletions, the platform caters to cricket enthusiasts who want to put their cricket knowledge to the test and compete with other users based on the real-life performance of the players they choose for their dream teams.

### 📝 Main Requirements

1. Make sure your design and website idea is unique. First, finalize your idea (what type of website you want to build). Then google the site design or visit `themeforest` to get your website idea. [You can visit this blog to collect free resources for your website](https://bootcamp.uxdesign.cc/free-images-and-resources-collection-for-website-c77f2fc46ce5). However, your website :x: `can not be related to your previous assignments or any demo project displayed in the course or in our conceptual sessions` :x:.

2. Home page will have a navbar, banner, footer and at least 6 types of brand names having the following information: `brand image`and `brand name`.

3. The navbar will have website name with logo, Home,Add Player, My Dream 11, and Login.

4. Add two extra sections in the home page in addition to the 4 sections mentioned above.

5. Create an `Add  Player` page where there will be a form for the user to add a missing player. The form will have certain input field:

   - Image
   - Name
   - Country
   - Player Type (Batsman,Bowler,AllRounder,WicketKeeper)
   - Short description
   - Rating for Type
   - Rating for Feilding
   - Add button

   This will be a private/protected route.

6. On clicking a brand will redirect the user to the page having products based on that brand. On that page, there will be a slider having at least 3 advertisement images ( These will about our App Download, offers , discounts promo codes) and some card which will contain players below

   - Image
   - Name
   - Cuntry
   - Player Type (Batsman,Bowler,AllRounder,WicketKeeper)
   - Rating
   - Details button
   - Update button (only for those player which are added by the current login user)

   > **Note:** If Any Country not have any player. You will have to show a relevant message on brand page to inform the users. and a add missing player button which will redirect user to the add Player page

7. Clicking on the Details button will take the user to the player detail route. Each route should display detailed information of the player. What you will include in the detailed information is entirely upto you but make sure it is relevant. Make sure to implement the `Add to My Squad` button.

8. The product detail route will be a private/protected route. Please make sure that if the user is not logged in, the private route redirects to the login page.

9. Clicking the `Add to My Squad` button will also store your(email) and player information in to the database. Inform the user with a success message using a toast/alert. `Do not use the browser alert.`

10. Create a `My Dream 11` page where a user will see all his/her squad players. If the user wants, he/she can delete a player from his squad. The design is up to you. This will be a private/protected route.

11. Clicking on the `Update button` will redirect the user to a form page where the form will have:

    - Image
    - Name
    - Country
    - Player Type (Batsman,Bowler,AllRounder,WicketKeeper)
    - Short description
    - Rating for Type
    - Rating for Feilding
    - Submit button

    This will be a private/protected route.

12. You Must implement Email and password based Authentication. This means, you will have to implement the Registration and the login page. Users should be able to toggle between Login and Registration view .

> :⚠️⚠️: `Note:` Do not enforce `forget or reset password feature` and the `email verification method`, as it will inconvenience the examiner. If you want, you can add email verification/forget the password after receiving the assignment result.

On the Registration page, display errors when:

     The password

     - is less than 6 characters
     - don't have a capital letter
     - don't have a special character

On the Login page, display errors when:

    - password doesn't match
    - email doesn't match
    You can take the error message from firebase. You can show the error below the input fields or via alert/toast. If you use alert/toast, do not implement the browser alert.

13. Also, implement at least `one extra login` which could be (facebook, github, google, etc).

14. Once logged in, the user name, profile picture and the logout button should appear on the navbar. If the user clicks on the logout button, make sure to log him/her out.

15. Add a 404 page (not found page)

### :🎁: Bonus Requirements:

1. **Commits & readme:**

   - Minimum 10 meaningful git commits on the client-side repository.
   - Minimum 5 meaningful commits on the server-side repository.
   - Create a readme for client-side and write about your project (at least 5 bullet points). ** Remember to add your client-side live link to your website here.**

2. After reloading the page of a private route, the user should not be redirected to the login page.

3. Make the website responsive. Make sure the site looks different on desktop and mobile responsive. Tablet responsive is optional

4. Implementing a dark/light theme toggle for the home page. It's optional to implement the theme toggle for the entire website.

### :📜: Additional information:

1. You cannot load the data from a .json file. The data must be stored in the database and you must all the data from the database.
2. You can use a local or host image anywhere or use pictures from the internet. And it's ok if you have the image url, but the image link doesn't work.
3. You can use vanilla CSS or any CSS library.
4. Try to host your site on Firebase (Netlify hosting will need some extra configurations)
5. Host your server-side application on Vercel. If needed, you can host somewhere else as well.
6. Make Sure you deploy server-side and client-side on the first day. If you have any issues with hosting or GitHub push, please join the "Github and deploy" related support session.

### :pushpin: What to submit

1. Your github client-side repository
2. Your github server-side repository
3. Your live website link

### Deadline

15 November 2023

### :trophy: No Pain, No Gain:

- The most beautiful moments in life comes after going through hardships and challenges.
