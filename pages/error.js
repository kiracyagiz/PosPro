
const Error = ({ statusCode }) => {
    return (
      <div>
        <p>
          {statusCode
            ? `Bir hata oluştu: ${statusCode}`
            : 'Bir hata oluştu sayfa bulunamadı.'}
        </p>
      </div>
    );
  };
  
  Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
  };
  
  export default Error;
  