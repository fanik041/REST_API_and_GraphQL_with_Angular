# Assessment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Solution for Java Explanation:
The solution for the Java question is in the main directory: `REST_API_and_GraphQL_with_Angular/main.java`. The time complexity for the solution is O(n^2) and I used nested for loop and a while loop to solve the issue, I created a method outside of the main method and called it after takin input from the user, the input determines the height of the pyramid.


## Setup-Part 1 for Angular:

For part-1 in Angular, go to `REST_API_and_GraphQL_with_Angular/app.component.html` to see the UI details. I used ngFor to loop through the fields in the REST API call to get exactly the required fields (Seo_title, description, url, isNoIndex). I created a model for the interface `Fields` that would get only the required values shown in the question. It is present in `REST_API_and_GraphQL_with_Angular/models/app.models.ts`

I also had to create a service for the fields using the command `ng generate service <service_name>`. In the service `app.service.ts` I created an observable that would iterate through the arrays in different fields and there are also cases where the values are null so I had to check if they are present as well. I created a pipe that maps the response of various objects and array of objects and returns one final object to display.

For the UI display I created a button that was connected to the click function that would trigger the method `loadData()` that would load all the data in the UI. 

## Setup-Parts 2-5 for Angular:

I am relatively new to GraphQL however, I tried to solve it, I tried to solve it to the best of my ability, I went to the test url for GraphiQL link that was provided. In the link I tried to locate the pageTemplate details that contained the matching `seo_title: Help & Support - Rogers` but I could not find it. I however, found fields `pageTemplateCollection` and `pageCategoryCollection`. I found a lot more titles and details in those fields. I then tried to setup the schema to try out question 3 and 4. My attempted code is in : `REST_API_and_GraphQL_with_Angular/part_2-5_work/src/app/` in the component I created called `graphql.component.ts`. I tried to setup the environment but I got errors related to dependency of the apollo-angular module and faced import errors and since I don't have much time I could not finish the setup. My plan was to use this query to implement it in the `REST_API_and_GraphQL_with_Angular/part_2-5_work/src/app/allComponents.component.ts` file which was setup tp generate that query.

```
query{
  pageTemplateCollection{
    items{
      seo{
        entryTitle
        title
        description
        isNoIndex
      }    
    }
  }
	# assetCollection(limit:100){
	# items{
	# title
	# description
	# url
	# contentType
	# sys{
	# environmentId
	# publishedAt
	# spaceId
	# firstPublishedAt
	# publishedVersion
	# }
	# }
	# }
  # entryCollection{
  #   items{
  #     sys{
  #       spaceId
  #       publishedAt
  #       publishedVersion
  #     }
  #     __typename
  #     contentfulMetadata{
  #       tags{
  #         id
  #         name
  #       }
  #     }
  #   }
  # }
  
  # pageCategory(id:"1", preview:true){
  #   entryTitle
  #   name
  #   url
  # }
  pageCategoryCollection{
    items{
      entryTitle
      url
      name
      parent{
        name
        entryTitle
        parent{
          name
        }
      }
      
    }
  }
}
```

