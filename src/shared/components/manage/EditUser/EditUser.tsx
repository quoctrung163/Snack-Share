import * as React from 'react';

import { useTranslation } from 'react-i18next';
import InputField from '../../../components/common/InputField/InputField';
import InputDropdown from '../../../components/common/InputDropdown/InputDropdown';

interface Props {
    handleSubmit?: (e: React.FormEvent) => void;
    handleChange?: any;
    values?: any;
}

const EditUser = ({ handleChange, handleSubmit, values }: Props) => {
    const { t } = useTranslation();
    // eslint-disable-next-line prefer-const
    let options = [{ label: values?.role, value: values?.role }];

    if (values?.role === 'admin') {
        options = [
            { label: values?.role, value: values?.role },
            { label: 'instructor', value: 'instructor' },
            { label: 'student', value: 'student' },
        ];
    }

    if (values?.role === 'instructor') {
        options = [
            { label: values?.role, value: values?.role },
            { label: 'admin', value: 'admin' },
            { label: 'student', value: 'student' },
        ];
    }

    if (values?.role === 'student') {
        options = [
            { label: values?.role, value: values?.role },
            { label: 'admin', value: 'admin' },
            { label: 'instructor', value: 'instructor' },
        ];
    }

    return (
        <div className="block__header">
            <div className="block-title block-title__center">
                <h3>{t('breadcrumb.editUser')}</h3>
            </div>
            <form onSubmit={handleSubmit} className="wrapper" style={{ width: '70%' }}>
                <InputField
                    name="first_name"
                    placeholder={t('editUser.firstName')}
                    text="* = Require"
                    onChange={handleChange('first_name')}
                    value={values.first_name}
                    required
                />
                <InputField
                    name="last_name"
                    placeholder={t('editUser.lastName')}
                    text=""
                    onChange={handleChange('last_name')}
                    value={values.last_name}
                    required
                />
                <InputField
                    name="email"
                    placeholder={t('editUser.email')}
                    text=""
                    onChange={handleChange('email')}
                    value={values.email}
                    required
                />
                <InputField
                    name="password"
                    placeholder={t('editUser.password')}
                    text=""
                    onChange={handleChange('password')}
                    value={values.password}
                    displayNone={true}
                    required
                />
                <InputDropdown
                    options={options}
                    onChange={handleChange('role')}
                    value={values?.role}
                    name="role"
                    placeholder="*Role"
                    required
                />
                <button type="submit" className="btn btn--gradient">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default EditUser;
