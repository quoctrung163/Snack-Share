export const getEnrollmentsService = async (enrollment: any, cb: Function) => {
    return await enrollment
        .find()
        .populate({
            path: 'student',
            model: 'users',
        })
        .populate({
            path: 'course',
            model: 'courses',
            populate: {
                path: 'instructor',
                model: 'users',
            },
        })
        .exec(cb);
};

export const getEnrollmentByStudentService = async (enrollment: any, reqQueryId: string) => {
    return await enrollment
        .find({
            student: reqQueryId,
        })
        .populate({ path: 'course', model: 'courses' });
};

export const getCheckEnrollmentService = async (
    enrollment: any,
    reqQueryId: string,
    reqQueryCourseId: string
) => {
    return await enrollment
        .findOne({
            student: reqQueryId,
            course: reqQueryCourseId,
        })
        .populate({ path: 'course', model: 'courses', select: 'courseName' });
};

export const findUserByEmailService = async (user: any, reqBodyStudent: string, cb: Function) => {
    return await user.find(
        {
            email: reqBodyStudent,
        },
        cb
    );
};

export const findCourseByNameService = async (course: any, reqBodyCourse: string, cb: Function) => {
    return await course.find(
        {
            courseName: reqBodyCourse,
        },
        cb
    );
};

export const updateEnrollmentByIdService = async (
    enrollment: any,
    reqQueryId: string,
    reqBody: any,
    option: any
) => {
    return await enrollment.findOneAndUpdate(
        {
            _id: reqQueryId,
        },
        reqBody,
        option
    );
};

export const saveEnrollmentService = async (enrollment: any) => {
    return await enrollment.save();
};

export const deleteEnrollmentService = async (enrollment: any, reqQueryId: string) => {
    return await enrollment.findOneAndRemove({
        _id: reqQueryId,
    });
};
