
import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

PostFilterForm.propTypes = {
    onSubmit: PropTypes.func,
};
PostFilterForm.defaultProps = {
    onSubmit: null,
};
function PostFilterForm(props) {
    const { onSubmit } = props;
    const { search, setSearch } = useState('')
    const typingTimeoutRef = useRef(null)
    function handleSearchChange(e) {
        const value = e.target.value
        setSearch(value)
        if (!onSubmit) return;

        if(typingTimeoutRef.current){
            clearTimeout(typingTimeoutRef.current)
        }
        typingTimeoutRef.current = setTimeout(() => {
            const formValues = {
                search: value,

            }
            onSubmit(formValues)
        }, 300)

    }

    return (
        <div>

            <form className="d-flex">
                <input value={search} onChange={handleSearchChange} className="form-control me-2" type="search" placeholder="Tìm kiếm địa chỉ..." aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>

        </div>
    );
}

export default PostFilterForm;