### User

| Column         | Type            | Relationships |
| -------------- | --------------- | ------------- |
| id             | String          |               |
| age            | Int             |               |
| name           | String          |               |
| email          | String          |               |
| role           | Enum            |               |
| writtenPosts   | Post[]          | One-to-Many   |
| favoritePosts  | Post[]          | One-to-Many   |
| userPreference | UserPreference? | One-to-One    |

### Post

| Column        | Type       | Relationships |
| ------------- | ---------- | ------------- |
| id            | String     |               |
| title         | String     |               |
| averageRating | Float      |               |
| createdAt     | DateTime   |               |
| updatedAt     | DateTime   |               |
| author        | User       | Many-to-One   |
| favoritedBy   | User?      | Many-to-One   |
| categories    | Category[] | Many-to-Many  |

### Category

| Column | Type   | Relationships |
| ------ | ------ | ------------- |
| id     | String |               |
| name   | String |               |
| posts  | Post[] | Many-to-Many  |

### UserPreference

| Column       | Type    | Relationships |
| ------------ | ------- | ------------- |
| id           | String  |               |
| emailUpdates | Boolean |               |
| user         | User?   | One-to-One    |

The markdown representation includes the table for each entity (table) in the schema. The columns of each table represent the properties of the entity. The relationships section indicates the type of relationship and cardinality between entities. One-to-Many relationships are represented with the `[]` notation, and One-to-One and Many-to-One relationships are denoted by `?` symbol. Many-to-Many relationships are represented by the `[]` notation in both entities.
