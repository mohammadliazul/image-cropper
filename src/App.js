import Cropper from 'cropperjs';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import './App.css';
import Frame from './components/Frame/Frame';
// import heart from './assets/shape/user_image_frame_1.png';
// import square from './assets/shape/user_image_frame_2.png';
// import circle from './assets/shape/user_image_frame_3.png';
// import rectangle from './assets/shape/user_image_frame_4.png';

function App() {
    const [selectedImage, setSelectedImage] = useState();
    // const [src, setSrc] = useState();
    
    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(URL.createObjectURL(e.target.files[0]));
        }
    };
 

    // const handleHideUploadDiv = () => {
    //     // const uploadImgDiv = document.getElementById('uploadImage');
    //     // if (uploadImgDiv.style.display === 'none') {
    //     //     uploadImgDiv.style.display = 'block';
    //     // } else {
    //     //     uploadImgDiv.style.display = 'none';
    //     // }
    //     document.getElementById('inputId').value = '';
    // };

    useEffect(() => {
        if (selectedImage) {
            const getImage = document.getElementById('imageId');
            const cropper = new Cropper(getImage, {
                aspectRatio: 0,
                // viewMode: 0,
            });
            document.getElementById('cropImageBtn').addEventListener('click', () => {
                const croppedImage = cropper.getCroppedCanvas().toDataURL('image/png');
                const outputImg = document.getElementById('croped-img-wrapper');
                outputImg.style.backgroundImage = `url(${croppedImage})`;
            });
        }
    }, [selectedImage]);

   // background-image: url(${cropURL});
       // -webkit-mask-image: url(${src});
    // mask-image: url(${src});
    
const StyledContainer = styled.div`
    width: 500px;
    height: 500px;
    margin: 20px 0 35px 0;
 
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;

    -webkit-mask-size: 85%;
    mask-size: 85%;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-position: center;
    mask-position: center;
`;

    const removeSelectedImage = () => {
      setSelectedImage();
      document.getElementById('inputId').value = '';
    };


    const handleFrame = (frame) => {
        const frameName = frame;
        const getCropedImgWrapper = document.getElementById('croped-img-wrapper');
        const getOriginal = document.getElementById('original');
        const getHeart = document.getElementById('heart');
        const getSquare = document.getElementById('square');
        const getCircle = document.getElementById('circle');
        const getRectangle = document.getElementById('rectangle');

        switch(frameName){
            case 'love': 
                getCropedImgWrapper.classList.remove('square');
                getCropedImgWrapper.classList.remove('circle');
                getCropedImgWrapper.classList.remove('rectangle');
                getCropedImgWrapper.classList.add('love');

                getHeart.classList.add('active-frame');
                getOriginal.classList.remove('active-frame');
                getSquare.classList.remove('active-frame');
                getCircle.classList.remove('active-frame');
                getRectangle.classList.remove('active-frame');
                break;
            
            case 'square': 
                getCropedImgWrapper.classList.remove('love');
                getCropedImgWrapper.classList.remove('circle');
                getCropedImgWrapper.classList.remove('rectangle');
                getCropedImgWrapper.classList.add('square');

                getSquare.classList.add('active-frame');
                getOriginal.classList.remove('active-frame');
                getHeart.classList.remove('active-frame');
                getCircle.classList.remove('active-frame');
                getRectangle.classList.remove('active-frame');
                break;

            case 'circle': 
                getCropedImgWrapper.classList.remove('love');
                getCropedImgWrapper.classList.remove('square');
                getCropedImgWrapper.classList.remove('rectangle');
                getCropedImgWrapper.classList.add('circle');

                getCircle.classList.add('active-frame');
                getOriginal.classList.remove('active-frame');
                getHeart.classList.remove('active-frame');
                getSquare.classList.remove('active-frame');
                getRectangle.classList.remove('active-frame');
                break;

            case 'rectangle': 
                getCropedImgWrapper.classList.remove('love');
                getCropedImgWrapper.classList.remove('square');
                getCropedImgWrapper.classList.remove('circle');
                getCropedImgWrapper.classList.add('rectangle');

                getRectangle.classList.add('active-frame');
                getOriginal.classList.remove('active-frame');
                getHeart.classList.remove('active-frame');
                getSquare.classList.remove('active-frame');
                getCircle.classList.remove('active-frame');
                break;

            default: 
                getCropedImgWrapper.classList.remove('love');
                getCropedImgWrapper.classList.remove('square');
                getCropedImgWrapper.classList.remove('circle');
                getCropedImgWrapper.classList.remove('rectangle');

                getOriginal.classList.add('active-frame');
                getHeart.classList.remove('active-frame');
                getSquare.classList.remove('active-frame');
                getCircle.classList.remove('active-frame');
                getRectangle.classList.remove('active-frame');
        };
    };     
       
 

    return (
        <section>
            {/*---------Menu Bar---------*/}
            <div className='menuBar-wrapper'>
              <button onClick={removeSelectedImage}>
                Remove This Image
              </button>
              <button id="cropImageBtn">
                  Crop Image
              </button>
              <button className="submitBtn">Use this image</button>
            </div>


            {/*---------Main Section---------*/}
            <div>
                {!selectedImage ?
                    <div className="upload-Img-Btn-wrapper">
                        <input accept="image/*" type="file" onChange={imageChange} id='inputId' />
                        <label htmlFor="inputId">Upload Image</label>
                    </div> : 
                    (
                    <>  
                        {/*---------Upload Img---------*/}
                        <div className="img-wrapper-main">
                            <div id="uploadImage">
                                <img
                                    // src={URL.createObjectURL(selectedImage)}
                                    src={selectedImage}
                                    alt="thumbnail"
                                    id="imageId"
                                /> 
                            </div>
                        </div>
                        {/*---------Croped Img---------*/}
                        <StyledContainer  id='croped-img-wrapper'></StyledContainer>
                        {/*---------Frame Icon---------*/}
                        <Frame handleFrame={handleFrame}></Frame>
                    </>
                )}
            </div>
        </section>
    );
}

export default App;
