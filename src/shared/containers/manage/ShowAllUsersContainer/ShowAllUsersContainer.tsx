/* eslint-disable prefer-const */
import * as React from 'react';

import ShowAllUsers from '../../../components/manage/ShowAllUsers/ShowAllUsers';
import CircleLoader from '../../../components/loader/CircleLoader/CircleLoader';

const ShowAllUsersContainer = ({ users }: any) => {
    const handleISODateToString = (isoDate: string = ''): string => {
        const date = new Date(isoDate);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let dt = date.getDate();

        if (dt < 10) {
            dt = Number('0' + dt);
        }

        if (month < 10) {
            month = Number('0' + month);
        }

        return `${year}/${month}/${dt}`;
    };

    const [values, setValues] = React.useState({
        inputValue: '',
    });

    const handleChange = (name: any) => (event: any) => {
        setValues({
            ...values,
            [name]: event.target.value,
        });
    };

    return (
        <>
            {users.loading ? (
                <CircleLoader />
            ) : (
                <ShowAllUsers
                    users={users?.users}
                    handleISODateToString={handleISODateToString}
                    values={values}
                    handleChange={handleChange}
                />
            )}
        </>
    );
};

export default ShowAllUsersContainer;
