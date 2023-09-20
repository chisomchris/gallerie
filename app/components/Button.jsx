export const Button = ({ label, loading }) => {
    return (
        <button type='submit' disabled={loading} className='bg-pink-700 text-white rounded-md font-semibold outline-none px-6 py-2 w-full hover:bg-pink-500 disabled:bg-gray-500'>
            {loading ? "Loading..." : label}
        </button>
    )
}
