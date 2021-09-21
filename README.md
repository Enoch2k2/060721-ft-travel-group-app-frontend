# Travel App


## Dev Installation

## To use dummy data and avoid backend requests:
    #/src/Globals.js

    export const useDummyData=true

Note: Posting new Points of interest is currently only supported when connected to rails/postgresql.

## To Use PostgreSQL Server & Local Fetch Requests:

    #/src/Globals.js

    export const useDummyData=false


### backend

    bundle install
    rails db:create
    rails db:migrate
    rails db:seed
    rails s

### frontend

    yarn install
    yarn start