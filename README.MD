# my-senior-project

This [Refine](https://github.com/refinedev/refine) project was generated with [create refine-app](https://github.com/refinedev/refine/tree/master/packages/create-refine-app).

## Getting Started

The OffTrack CRM is still in development, and will provide a centralized database for customer information, accessible through an intuitive and simple UI. Key features will include:
1.	Customer status filters (e.g., overdue payments, pending storage drop-offs)
2.	Contact management for scheduling storage pickups and drop-offs
3.	Billing and communication tools (e.g., email lists for invoicing)
4.	(Future potential feature) Route planning for more efficient customer service.

This application will be used on both the computer and phone through the web. It will utilize Refine (a React-based framework) and Ant Design.

While different CRM solutions exist, they may be too generic or expensive for a small business. This CRM is tailored to a business's specific needs and will provide an affordable alternative with flexibility for customization.


## Must Have Requirements
1.	Have a functional mock database connected to the CRM that can populate sample data.
    a.	Completed when visualizations are populated with sample data.
2.	 Have a completed authentication/login page.
    a.	Completed when an email and password combination is entered into the login that authenticates the user and directs them to the dashboard page. 
3.	 Have a dashboard page showing some dashboard elements.
    a.	Complete when the dashboard page has more than one chart or card on the screen.
4.	 Have a user profile where user information can be stored and edited.
    a.	Have a user profile icon in the upper right-hand corner of the screen that can be clicked on, directs the user to a profile, and changes can be made and saved. 
5.	 Have a skeleton customers page where customers can be viewed.
    a.	Change the “companies” page to a customer page that lists one or more sample customers and their information or status. 
6.	Have a functional navigation bar to different website pages.
    a.	Have a navigation bar on the left-hand side of the dashboard that navigates to the proper pages. The pages do not need to be complete, but the navigation needs to work.

## Stretch Requirements
1.	Complete functionality to add, remove, and edit customers.
    a.	Complete when a customer is successfully added, edited, and removed.
2.	 Create a kanban style employee tasks page.
    a.	Have a tasks page that shows the outline for a kanban board. There do not need to be tasks, just the outline of the page.
3.	 Create user permissions and display permission status in user profile.
    a.	Have different user permissions that are assigned to every user. The user cannot change their own permission, only an admin can assign permissions. Complete when a “user” is not able to perform an admin only task (deleting a customer). 
4.	Have total count cards displayed at the top of the dashboard page. 
    a.	Complete when there are 3 cards at the top of the dashboard with graphs populated with sample data.



## Available Scripts

### Running the development server.

```bash
    npm run dev
```

### Building for production.

```bash
    npm run build
```

### Running the production server.

```bash
    npm run start
```

## Learn More

To learn more about the tools utilized in this project, please check out the [Refine Documentation](https://refine.dev/docs) and documentation below:

- **NestJS Query Data Provider** [Docs](https://refine.dev/docs/data/packages/nestjs-query/)
- **Ant Design** [Docs](https://refine.dev/docs/ui-frameworks/antd/tutorial/)
- **React Router** [Docs](https://refine.dev/docs/core/providers/router-provider/)
- **Custom Auth Provider** [Docs](https://refine.dev/docs/core/providers/auth-provider/)
