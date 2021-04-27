import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getLectures } from '../../../store/lectures/selectors';
import { getCourses } from '../../../store/courses/selectors';
import { getAllCourses } from '../../../store/courses/effects';
import { getLecturesById } from '../../../store/lectures/effects';
import CoursesContainer from '../../../containers/course/CoursesContainer/CoursesContainer';
import PageHeader from '../../../components/layout/PageHeader/PageHeader';
import CircleLoader from '../../../components/loader/CircleLoader/CircleLoader';

const Courses = () => {
    const location = useLocation();

    const dispatch = useDispatch();

    const pathName = location?.pathname || '';
    const id = pathName.split('/courses/').join('');

    React.useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, []);

    React.useEffect(() => {
        dispatch(getLecturesById(id));
        dispatch(getAllCourses());
    }, [dispatch, id]);

    const lectures = useSelector(getLectures);
    const courses = useSelector(getCourses);
    // @ts-ignore
    const course = courses?.courses?.find((x) => x?._id === id);

    return (
        <>
            <PageHeader title={course?.courseName} loading={courses?.loading} />
            {lectures.loading ? (
                <CircleLoader />
            ) : (
                <CoursesContainer lectures={lectures} pathName={pathName} />
            )}
        </>
    );
};

export default Courses;
