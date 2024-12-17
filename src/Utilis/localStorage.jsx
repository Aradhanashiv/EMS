// localStorage.clear();

const employees = [
          {
            "id": 1,
            "firstName": "Arjun",
            "email": "employee1@example.com",
            "password": "123",
            "taskCounts": {
              "active": 2,
              "newTask": 1,
              "completed": 1,
              "failed": 0
          },
            "tasks": [
              {
                "taskTitle": "Update Report",
                "description": "Update the monthly sales report and submit it to the manager.",
                "taskDate": "2024-12-10",
                "category": "Reporting",
                "active": true,
                "newTask": true,
                "failedTask": false,
                "completed": false
              },
              {
                "taskTitle": "Client Meeting",
                "description": "Attend the meeting with client ABC regarding the new project.",
                "taskDate": "2024-12-12",
                "category": "Meeting",
                "active": true,
                "newTask": false,
                "failedTask": false,
                "completed": true
              },
              {
                "taskTitle": "Prepare Presentation",
                "description": "Create a presentation for the upcoming product launch.",
                "taskDate": "2024-12-15",
                "category": "Preparation",
                "active": false,
                "newTask": false,
                "failedTask": false,
                "completed": false
              }
            ]
          },
          {
            "id": 2,
            "firstName": "Manas",
            "email": "employee2@example.com",
            "password": "123",
            "taskCounts": {
              "active": 1,
              "newTask": 0,
              "completed": 1,
              "failed": 0
          },
            "tasks": [
              {
                "taskTitle": "Server Maintenance",
                "description": "Perform maintenance on the company servers to ensure stability.",
                "taskDate": "2024-12-09",
                "category": "IT Support",
                "active": true,
                "newTask": true,
                "failedTask": false,
                "completed": false
              },
              {
                "taskTitle": "System Backup",
                "description": "Ensure the system backups are completed and verified.",
                "taskDate": "2024-12-13",
                "category": "Backup",
                "active": true,
                "newTask": false,
                "failedTask": false,
                "completed": false
              },
              {
                "taskTitle": "Bug Fixing",
                "description": "Fix the reported bugs in the internal software system.",
                "taskDate": "2024-12-14",
                "category": "Development",
                "active": true,
                "newTask": false,
                "failedTask": true,
                "completed": false
              }
            ]
          },
          {
            "id": 3,
            "firstName": "sarthak",
            "email": "employee3@example.com",
            "password": "123",
            "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
            "tasks": [
              {
                "taskTitle": "Content Writing",
                "description": "Write blog content for the company website on the new product.",
                "taskDate": "2024-12-08",
                "category": "Writing",
                "active": true,
                "newTask": true,
                "failedTask": false,
                "completed": true
              },
              {
                "taskTitle": "Email Campaign",
                "description": "Prepare and send the email campaign to all subscribed users.",
                "taskDate": "2024-12-10",
                "category": "Marketing",
                "active": true,
                "newTask": false,
                "failedTask": false,
                "completed": true
              },
              {
                "taskTitle": "Website Update",
                "description": "Update the website with the latest product information.",
                "taskDate": "2024-12-14",
                "category": "Web Development",
                "active": true,
                "newTask": false,
                "failedTask": false,
                "completed": false
              }
            ]
          },
          {
            "id": 4,
            "firstName": "bhanu",
            "email": "employee4@example.com",
            "password": "123",
            "taskCounts": {
              "active": 2,
              "newTask": 1,
              "completed": 0,
              "failed": 0
          },
            "tasks": [
              {
                "taskTitle": "Sales Calls",
                "description": "Make sales calls to potential clients for the new service.",
                "taskDate": "2024-12-11",
                "category": "Sales",
                "active": true,
                "newTask": true,
                "failedTask": false,
                "completed": false
              },
              {
                "taskTitle": "Team Training",
                "description": "Conduct a training session for the new team members.",
                "taskDate": "2024-12-13",
                "category": "Training",
                "active": false,
                "newTask": false,
                "failedTask": false,
                "completed": true
              },
              {
                "taskTitle": "Customer Support",
                "description": "Assist customers with issues related to product usage.",
                "taskDate": "2024-12-14",
                "category": "Customer Service",
                "active": true,
                "newTask": false,
                "failedTask": false,
                "completed": false
              }
            ]
          },
          {
            "id": 5,
            "firstName": "divya",
            "email": "employee5@example.com",
            "password": "123",
            "taskCounts": {
              "active": 2,
              "newTask": 1,
              "completed": 1,
              "failed": 0
          },
            "tasks": [
              {
                "taskTitle": "Market Research",
                "description": "Conduct market research to identify new trends in the industry.",
                "taskDate": "2024-12-07",
                "category": "Research",
                "active": true,
                "newTask": true,
                "failedTask": false,
                "completed": false
              },
              {
                "taskTitle": "Competitor Analysis",
                "description": "Analyze competitor pricing strategies and market positioning.",
                "taskDate": "2024-12-09",
                "category": "Analysis",
                "active": true,
                "newTask": false,
                "failedTask": false,
                "completed": true
              },
              {
                "taskTitle": "Product Testing",
                "description": "Test the new product features and report issues.",
                "taskDate": "2024-12-11",
                "category": "Quality Assurance",
                "active": true,
                "newTask": false,
                "failedTask": false,
                "completed": true
              }
            ]
          }
        ]
        // const admin = {
        //   "id": 6,
        //   "email": "admin@example.com",
        //   "password": "123",
        //   "tasks": [
        //     {
        //       "taskTitle": "Admin Dashboard Update",
        //       "description": "Update the admin dashboard with new user statistics.",
        //       "taskDate": "2024-12-08",
        //       "category": "Admin",
        //       "active": true,
        //       "newTask": true,
        //       "failedTask": false,
        //       "completed": false
        //     },
        //     {
        //       "taskTitle": "Access Review",
        //       "description": "Review user access levels and permissions.",
        //       "taskDate": "2024-12-10",
        //       "category": "Admin",
        //       "active": true,
        //       "newTask": false,
        //       "failedTask": false,
        //       "completed": true
        //     },
        //     {
        //       "taskTitle": "Team Meeting",
        //       "description": "Conduct a team meeting to discuss project deadlines and priorities.",
        //       "taskDate": "2024-12-12",
        //       "category": "Management",
        //       "active": true,
        //       "newTask": false,
        //       "failedTask": false,
        //       "completed": false
        //     }
        //   ]
        // }
      
      

    

    const admin =  [{
        "id": 6,
        "email": "admin@example.com",
        "password": "123"
      }]


export const setLocalStorage = () => {
    localStorage.setItem('employees' , JSON.stringify(employees));
    localStorage.setItem('admin' ,JSON.stringify(admin));
}

export const getLocalStorage = () => {
     const employees = JSON.parse(localStorage.getItem('employees'));
     const admin = JSON.parse(localStorage.getItem('admin'));
    // console.log(JSON.parse(admin_data));
    return {employees,admin}
}
