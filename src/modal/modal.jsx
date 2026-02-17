
export function Modal({children,show,setShow,persistent=false}){

    const handleOutSideClick=(e)=>{
        if(e.target.className == 'overlay'&&persistent === false){
            setShow(false)
        }
    }

    return(
        show&&
        <div className='overlay'>
            <div className='modal-content' onClick={handleOutSideClick}>
                {children}
            </div>
        </div>
    )

}