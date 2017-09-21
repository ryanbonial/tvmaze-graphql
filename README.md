# tvmaze-graphql
This is a [GraphQL](http://graphql.org/) implementation of the [TVMaze API]( https://www.tvmaze.com/api)

## Example
### Request
```
{
  person(id: 49012) {
    url
    name
    image
    castCredits {
      show {
        premiered
        runtime
        name
      }
      character {
        name
      }
    }
    crewCredits {
      type
    }
  }
}
```
### Reponse
```json
{
  "data": {
    "person": {
      "url": "http://www.tvmaze.com/people/49012/tina-fey",
      "name": "Tina Fey",
      "image": "http://static.tvmaze.com/uploads/images/medium_portrait/6/16902.jpg",
      "castCredits": [
        {
          "show": {
            "premiered": "2006-10-11",
            "runtime": 30,
            "name": "30 Rock"
          },
          "character": {
            "name": "Liz Lemon"
          }
        },
        {
          "show": {
            "premiered": "1975-10-11",
            "runtime": 90,
            "name": "Saturday Night Live"
          },
          "character": {
            "name": "Tina Fey"
          }
        },
        {
          "show": {
            "premiered": "1969-11-10",
            "runtime": 30,
            "name": "Sesame Street"
          },
          "character": {
            "name": "Pirate Captain"
          }
        },
        {
          "show": {
            "premiered": "1946-03-30",
            "runtime": 180,
            "name": "Golden Globe Awards"
          },
          "character": {
            "name": "Host"
          }
        }
      ],
      "crewCredits": [
        {
          "type": "Creator"
        },
        {
          "type": "Executive Producer"
        },
        {
          "type": "Creator"
        },
        {
          "type": "Executive Producer"
        },
        {
          "type": "Executive Producer"
        }
      ]
    }
  }
}
```