import homeimg from '../../assets/pictures/home-image.png'
import { useNavigate } from 'react-router-dom';
import '../../assets/sass/scss/NavBar.scss'
const NavBar = () => {
    const navigate = useNavigate();
    const accessToken = localStorage.getItem('accessToken')
    console.log(accessToken);

    const handleClickSignIn = () =>{
        navigate('/login');
    }

    const handleClickLogOut = () =>{
        navigate('/');
        localStorage.clear();
        console.log(localStorage, "after logout");
    }
    const handleClickProfile = () =>{
        navigate("/profile");
    }

    return (
        <>
            <div className='nav-bar'>
            <div className='nav-bar_logo'>
                <div className='nav-bar_logo-short'></div>
                <div className='nav-bar_logo-tall'></div>
                </div>
                {accessToken ?
                    (<div className="flex justify-center items-center gap-10 ">
                        <button onClick={handleClickProfile}
                        style={{marginRight:"30px"}}>
                        Profile</button>
                        <button
                        onClick={handleClickLogOut}
                        >Log out</button>
                    </div>
                    ):
                    <button
                    onClick={handleClickSignIn}>
                        Sign In
                    </button>
                    
                }
            </div>
            <div className='homepage'>
                <div className='homepage-left'>
                    <h1 className=''>Save your data storage here</h1>
                    <p>Data Warehouse is a data storage area that has been
                        tested for security, so you can store your data here
                        safely but not be afraid of being stolen by others.</p>
                        <button
                        >Learn more</button>
                        
                </div>
                <div className='homepage-right'>
                            <img src={homeimg} />
                        </div>
            </div>
            
        </>
    );
};


export default NavBar;