# Backend-CRUD-Angular-16-dotnet-7
Boilerplate Backend CRUD Web App created with Angular 16 + .NET 7 by [StackPuz](https://stackpuz.com).

## Demo
Checkout the live demo at https://demo-spa.stackpuz.com

## Features
- Fully Responsive Layout.
- Sorting, Filtering and Pagination on Data List.
- User Management, User Authentication and Authorization, User Profile, Reset Password.
- Input Mask and Date Picker for date and time input field with Form Validation.

![Responsive Layout](https://stackpuz.com/img/feature/responsive.gif)  
![Data List](https://stackpuz.com/img/feature/list.gif)  
![User Module](https://stackpuz.com/img/feature/user.png)  
![Input Mask and Date Picker](https://stackpuz.com/img/feature/date.gif)

## Minimum requirements
- Node.js 16.14
- .NET 7
- MySQL 5.7

## Installation
1. Clone this repository. `git clone https://github.com/stackpuz/Backend-CRUD-Angular-16-dotnet-7.git .`
2. Change directory to Angular project. `cd Backend-CRUD-Angular-16-dotnet-7/angular`
3. Install the Angular dependencies. `npm install`
4. Create a new database and run [/database.sql](/database.sql) script to create tables and import data.
5. Edit the database configuration in [/dotnet_api/appsettings.js](/dotnet_api/appsettings.json) file.
    ```
    "ConnectionStrings": {
        "Database": "server=127.0.0.1;port=3306;database=testdb;user id=root;password=;charset=utf8;"
    }
    ```

## Run project

1. Run Angular project. `npm start`
2. Run .NET project. `dotnet run --urls="http://localhost:5000`
3. Navigate to `http://localhost:4200`
4. Login with user `admin` password `1234`

## Customization
To customize this project to use other Database Engines, CSS Frameworks, Icons, Input Mask, Date picker, Date format, Font and more. Please visit [stackpuz.com](https://stackpuz.com).

## License

[MIT](https://opensource.org/licenses/MIT)