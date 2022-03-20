import React from 'react';
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
    function handleSearchChange(e) {
        setSearch(e.target.value)
        if(!onSubmit) return;
        const formValues = {
            search,

        }
        onSubmit(formValues)
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