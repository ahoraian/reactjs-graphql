import React from 'react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';

import Course from './Course';

const Courses = () => (
    <Query query={gql`
        {
            allCourses {
                id
                title
                author
                url
                author
                description
            }
        }
    `}
    >
        {
            ({loading, error, data}) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error {error.toString()}</p>;

                return data.allCourses.map((item) => (
                    <Course course={item}/>
                ))
            }
        }
    </Query>

);

export default Courses;