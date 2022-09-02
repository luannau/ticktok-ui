import HeaderUpload from './Header/Header';

function UploadLayout({ children }) {
  return (
    <div>
      <HeaderUpload />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default UploadLayout;
