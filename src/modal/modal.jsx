
export function Modal({ children, show, setShow, persistent = false }) {

    const handleOutSideClick = (e) => {
        if (e.target.className == e.currentTarget && !persistent) {
            setShow(false)
        }
    }

    if (!show) return null

    return (
        <div className='overlay' onClick={handleOutSideClick}>
            <div className='modal-content'>
                {children}
            </div>
        </div>
    )

}