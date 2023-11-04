/*
Responsável por renderizar icones .svg e imagens
*/

function Icon({className, src, isImage = false, size = 'cover'}){
    return(
        <div className={className}
            style={ (isImage)? {
                background: `url(${src}) no-repeat center`,
                backgroundSize: size,
                width: '100%',
                height: '100%',
            } : {
                WebkitMask: `url(${src}) no-repeat center`,
                WebkitMaskSize: size,
                width: '100%',
                height: '100%',
            }}
        >            
        </div>
    );
}

export default Icon;