import { useState} from 'react'
import '../styles/cards.css'

function Cards({cellPhone}) {
  const [reactIconColor, setReactIconColor] = useState('#f0386b')
  const [mongoIconColor, setMongoIconColor] = useState('#f0386b')
  const [mySQLIconColor, setMySQLIconColor] = useState('#f0386b')
  const [htmlIconColor, setHtmlIconColor] = useState('#f0386b')
  const [cssIconColor, setCssIconColor] = useState('#f0386b')
  const [javaScriptIconColor, setJavaScriptIconColor] = useState('#f0386b')
  const [nodeJSIconColor, setNodeJSIconColor] = useState('#f0386b')
  const [npmIconColor, setNpmIconColor] = useState('#f0386b')
  const [gitIconColor, setGitIconColor] = useState('#f0386b')

  const reactIcon = <svg className='card-icon' viewBox="0 0 128 128">
    <g fill={reactIconColor}><circle cx="64" cy="64" r="11.4"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path></g>
  </svg>

  const mongoIcon = <svg className='card-icon' viewBox="0 0 128 128">
    <path fillRule="evenodd" clipRule="evenodd" fill={mongoIconColor} d="M90.491 57.282c-.37-4.79-1.496-9.409-3.062-13.934-3.244-10.104-8.45-19.046-15.783-26.74-1.854-1.946-3.916-3.729-5.209-6.151-.818-1.532-1.597-3.085-2.394-4.629l-.505-1.273c-.085.292-.139.396-.142.501-.065 2.517-1.491 4.224-3.267 5.817-1.997 1.793-3.856 3.739-5.775 5.618l-5.901 7.763c-1.592 2.925-3.182 5.85-4.772 8.775l-3.19 8.617-.096.134c-1.756 5.768-2.622 11.698-3.048 17.688-.16 2.251.022 4.535.149 6.798.181 3.235.743 6.415 1.586 9.545 3.062 11.372 9.276 20.805 17.771 28.819 1.579 1.489 3.199 2.843 4.847 4.26.282-.965.507-1.93.763-2.895.256-.961.515-1.917.688-2.881-.174.964-.369 1.92-.562 2.881l-.826 2.895.738 2.501.684 3.884.326 4.053c-.003.823-.036 1.648.014 2.47.012.21.288.404.442.606l1.376.483 1.434.558-.246-3.603-.011-3.548.495-5.405.359-1.177 1.027-1.82c1.268-1.02 2.629-1.946 3.784-3.081 2.09-2.054 4.175-4.134 6.045-6.383a47.846 47.846 0 006.191-9.516c1.122-2.284 2.178-4.614 3.052-7.001.77-2.104 1.247-4.315 1.854-6.479.054-.156.126-.309.16-.468 1.254-5.841 1.465-11.741 1.004-17.682zm-23.599 49.375l-.805-1.763.805 1.763 1.183 1.01-1.183-1.01z"></path>
  </svg>

  const mySQLIcon = <svg className='card-icon' viewBox="0 0 128 128">
    <path fill={mySQLIconColor} d="M116.948 97.807c-6.863-.187-12.104.452-16.585 2.341-1.273.537-3.305.552-3.513 2.147.7.733.809 1.829 1.365 2.731 1.07 1.73 2.876 4.052 4.488 5.268 1.762 1.33 3.577 2.751 5.465 3.902 3.358 2.047 7.107 3.217 10.34 5.268 1.906 1.21 3.799 2.733 5.658 4.097.92.675 1.537 1.724 2.732 2.147v-.194c-.628-.8-.79-1.898-1.366-2.733l-2.537-2.537c-2.48-3.292-5.629-6.184-8.976-8.585-2.669-1.916-8.642-4.504-9.755-7.609l-.195-.195c1.892-.214 4.107-.898 5.854-1.367 2.934-.786 5.556-.583 8.585-1.365l4.097-1.171v-.78c-1.531-1.571-2.623-3.651-4.292-5.073-4.37-3.72-9.138-7.437-14.048-10.537-2.724-1.718-6.089-2.835-8.976-4.292-.971-.491-2.677-.746-3.318-1.562-1.517-1.932-2.342-4.382-3.511-6.633-2.449-4.717-4.854-9.868-7.024-14.831-1.48-3.384-2.447-6.72-4.293-9.756-8.86-14.567-18.396-23.358-33.169-32-3.144-1.838-6.929-2.563-10.929-3.513-2.145-.129-4.292-.26-6.438-.391-1.311-.546-2.673-2.149-3.902-2.927C17.811 4.565 5.257-2.16 1.633 6.682c-2.289 5.581 3.421 11.025 5.462 13.854 1.434 1.982 3.269 4.207 4.293 6.438.674 1.467.79 2.938 1.367 4.489 1.417 3.822 2.652 7.98 4.487 11.511.927 1.788 1.949 3.67 3.122 5.268.718.981 1.951 1.413 2.145 2.927-1.204 1.686-1.273 4.304-1.95 6.44-3.05 9.615-1.899 21.567 2.537 28.683 1.36 2.186 4.567 6.871 8.975 5.073 3.856-1.57 2.995-6.438 4.098-10.732.249-.973.096-1.689.585-2.341v.195l3.513 7.024c2.6 4.187 7.212 8.562 11.122 11.514 2.027 1.531 3.623 4.177 6.244 5.073v-.196h-.195c-.508-.791-1.303-1.119-1.951-1.755-1.527-1.497-3.225-3.358-4.487-5.073-3.556-4.827-6.698-10.11-9.561-15.609-1.368-2.627-2.557-5.523-3.709-8.196-.444-1.03-.438-2.589-1.364-3.122-1.263 1.958-3.122 3.542-4.098 5.854-1.561 3.696-1.762 8.204-2.341 12.878-.342.122-.19.038-.391.194-2.718-.655-3.672-3.452-4.683-5.853-2.554-6.07-3.029-15.842-.781-22.829.582-1.809 3.21-7.501 2.146-9.172-.508-1.666-2.184-2.63-3.121-3.903-1.161-1.574-2.319-3.646-3.124-5.464-2.09-4.731-3.066-10.044-5.267-14.828-1.053-2.287-2.832-4.602-4.293-6.634-1.617-2.253-3.429-3.912-4.683-6.635-.446-.968-1.051-2.518-.391-3.513.21-.671.508-.951 1.171-1.17 1.132-.873 4.284.29 5.462.779 3.129 1.3 5.741 2.538 8.392 4.294 1.271.844 2.559 2.475 4.097 2.927h1.756c2.747.631 5.824.195 8.391.975 4.536 1.378 8.601 3.523 12.292 5.854 11.246 7.102 20.442 17.21 26.732 29.269 1.012 1.942 1.45 3.794 2.341 5.854 1.798 4.153 4.063 8.426 5.852 12.488 1.786 4.052 3.526 8.141 6.05 11.513 1.327 1.772 6.451 2.723 8.781 3.708 1.632.689 4.307 1.409 5.854 2.34 2.953 1.782 5.815 3.903 8.586 5.855 1.383.975 5.64 3.116 5.852 4.879zM29.729 23.466c-1.431-.027-2.443.156-3.513.389v.195h.195c.683 1.402 1.888 2.306 2.731 3.513.65 1.367 1.301 2.732 1.952 4.097l.194-.193c1.209-.853 1.762-2.214 1.755-4.294-.484-.509-.555-1.147-.975-1.755-.556-.811-1.635-1.272-2.339-1.952z"></path>
  </svg>

  const htmlIcon = <svg className='card-icon' viewBox="0 0 128 128">
    <path fill={htmlIconColor} d="M9.032 2l10.005 112.093 44.896 12.401 45.02-12.387L118.968 2H9.032zm89.126 26.539l-.627 7.172L97.255 39H44.59l1.257 14h50.156l-.336 3.471-3.233 36.119-.238 2.27L64 102.609v.002l-.034.018-28.177-7.423L33.876 74h13.815l.979 10.919L63.957 89H64v-.546l15.355-3.875L80.959 67H33.261l-3.383-38.117L29.549 25h68.939l-.33 3.539z"></path>
  </svg>

  const cssIcon = <svg className='card-icon' viewBox="0 0 128 128">
    <path fill={cssIconColor} d="M8.76 1l10.055 112.883 45.118 12.58 45.244-12.626L119.24 1H8.76zm89.591 25.862l-3.347 37.605.01.203-.014.467v-.004l-2.378 26.294-.262 2.336L64 101.607v.001l-.022.019-28.311-7.888L33.75 72h13.883l.985 11.054 15.386 4.17-.004.008v-.002l15.443-4.229L81.075 65H48.792l-.277-3.043-.631-7.129L47.553 51h34.749l1.264-14H30.64l-.277-3.041-.63-7.131L29.401 23h69.281l-.331 3.862z"></path>
  </svg>

  const javaScriptIcon = <svg className='card-icon' viewBox="0 0 128 128">
    <path fill={javaScriptIconColor} d="M2 1v125h125V1H2zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065C58.433 78.073 58.48 68 58.48 58h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z"></path>
  </svg>

  const nodeJSIcon = <svg className='card-icon' viewBox="0 0 128 128">
    <path fill={nodeJSIconColor} d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"></path>
  </svg>

  const npmIcon = <svg className='card-icon' viewBox="0 0 128 128">
    <path fill={npmIconColor} d="M2 38.5h124v43.71H64v7.29H36.44v-7.29H2zm6.89 36.43h13.78V53.07h6.89v21.86h6.89V45.79H8.89zm34.44-29.14v36.42h13.78v-7.28h13.78V45.79zm13.78 7.29H64v14.56h-6.89zm20.67-7.29v29.14h13.78V53.07h6.89v21.86h6.89V53.07h6.89v21.86h6.89V45.79z"></path>
  </svg>

  const gitIcon = <svg className='card-icon' viewBox="0 0 128 128">
    <path fill={gitIconColor} d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.001-11.501z"></path>
  </svg>

  if(cellPhone) {
    return (
      <div className='card-row'>

<div className='card' onMouseEnter={() => setReactIconColor('#02020a')} onMouseLeave={() => setReactIconColor('#f0386b')}>
              <div className="card-face front">
                <div className='card-content'>
                  {reactIcon}
                  <h3 className='card-title'>React</h3>
                </div>
              </div>
              <div className='card-face back'>
                <div className='card-content'>
                  <p className='card-description'>
                    Powerfull library created by Facebook. React is a User Interface (UI) library used to make dinamic and modular front-end interfaces.
                  </p>
                </div>
              </div>
            </div>

            <div className='card' onMouseEnter={() => setMongoIconColor('#02020a')} onMouseLeave={() => setMongoIconColor('#f0386b')}>
              <div className="card-face front">
                <div className='card-content'>
                  {mongoIcon}
                  <h3 className='card-title'>MongoDB</h3>
                </div>
              </div>
              <div className='card-face back'>
                <div className='card-content'>
                  <p className='card-description'>
                    The most popular NoSQL database, MongoDB is a document-oriented database used for high volume, constantly changing data storage.
                  </p>
                </div>
              </div>
            </div>

            <div className='card' onMouseEnter={() => setMySQLIconColor('#02020a')} onMouseLeave={() => setMySQLIconColor('#f0386b')}>
              <div className="card-face front">
                <div className='card-content'>
                  {mySQLIcon}
                  <h3 className='card-title'>MySQL</h3>
                </div>
              </div>
              <div className='card-face back'>
                <div className='card-content'>
                  <p className='card-description'>
                    MySQL is a database management system that utilizes SQL language as a interface.
                  </p>
                </div>
              </div>
            </div>

            <div className='card' onMouseEnter={() => setNodeJSIconColor('#02020a')} onMouseLeave={() => setNodeJSIconColor('#f0386b')}>
              <div className="card-face front">
                <div className='card-content'>
                  {nodeJSIcon}
                  <h3 className='card-title'>Node.JS</h3>
                </div>
              </div>
              <div className='card-face back'>
                <div className='card-content'>
                  <p className='card-description'>
                    Node.JS is a open source software, based on V8 by Google, that allows running JavaScript outside the browser, in an asynchronous event-driven runtime.
                  </p>
                </div>
              </div>
            </div>

            <div className='card' onMouseEnter={() => setNpmIconColor('#02020a')} onMouseLeave={() => setNpmIconColor('#f0386b')}>
              <div className="card-face front">
                <div className='card-content'>
                  {npmIcon}
                  <h3 className='card-title'>npm</h3>
                </div>
              </div>
              <div className='card-face back'>
                <div className='card-content'>
                  <p className='card-description'>
                    Npm is a online repository for publishing open-source Node.Js projects. It's today the larggest Node.Js package repository and most used package mannager.
                  </p>
                </div>
              </div>
            </div>

            <div className='card' onMouseEnter={() => setGitIconColor('#02020a')} onMouseLeave={() => setGitIconColor('#f0386b')}>
              <div className="card-face front">
                <div className='card-content'>
                  {gitIcon}
                  <h3 className='card-title'>Git</h3>
                </div>
              </div>
              <div className='card-face back'>
                <div className='card-content'>
                  <p className='card-description'>
                    Git is a open souce distributed version control system designed to handle everything from small to very large projects with speed and efficiency.
                  </p>
                </div>
              </div>
            </div>

            <div className='card' onMouseEnter={() => setHtmlIconColor('#02020a')} onMouseLeave={() => setHtmlIconColor('#f0386b')}>
              <div className="card-face front">
                <div className='card-content'>
                  {htmlIcon}
                  <h3 className='card-title'>HTML</h3>
                </div>
              </div>
              <div className='card-face back'>
                <div className='card-content'>
                  <p className='card-description'>
                    MarkDown language used to build the foundation of every web application.
                  </p>
                </div>
              </div>
            </div>

            <div className='card' onMouseEnter={() => setCssIconColor('#02020a')} onMouseLeave={() => setCssIconColor('#f0386b')}>
              <div className="card-face front">
                <div className='card-content'>
                  {cssIcon}
                  <h3 className='card-title'>CSS</h3>
                </div>
              </div>
              <div className='card-face back'>
                <div className='card-content'>
                  <p className='card-description'>
                    Cascading Style Sheets is a mechanims utilized to apply styles to a web document.
                  </p>
                </div>
              </div>
            </div>

            <div className='card' onMouseEnter={() => setJavaScriptIconColor('#02020a')} onMouseLeave={() => setJavaScriptIconColor('#f0386b')}>
              <div className="card-face front">
                <div className='card-content'>
                  {javaScriptIcon}
                  <h3 className='card-title'>JavaScript</h3>
                </div>
              </div>
              <div className='card-face back'>
                <div className='card-content'>
                  <p className='card-description'>
                    JavaScript is a high-level programming language used both on client and server sides. Thats the engine that makes webpages run.
                  </p>
                </div>
              </div>
            </div>



      </div>
    )
  }

  return (
    <section className="cards-section">

          <div className='card-row'>

            <div className='card' onMouseEnter={() => setReactIconColor('#02020a')} onMouseLeave={() => setReactIconColor('#f0386b')}>
              <div className="card-face front">
                <div className='card-content'>
                  {reactIcon}
                  <h3 className='card-title'>React</h3>
                </div>
              </div>
              <div className='card-face back'>
                <div className='card-content'>
                  <p className='card-description'>
                    Powerfull library created by Facebook. React is a User Interface (UI) library used to make dinamic and modular front-end interfaces.
                  </p>
                </div>
              </div>
            </div>

            <div className='card' onMouseEnter={() => setMongoIconColor('#02020a')} onMouseLeave={() => setMongoIconColor('#f0386b')}>
              <div className="card-face front">
                <div className='card-content'>
                  {mongoIcon}
                  <h3 className='card-title'>MongoDB</h3>
                </div>
              </div>
              <div className='card-face back'>
                <div className='card-content'>
                  <p className='card-description'>
                    The most popular NoSQL database, MongoDB is a document-oriented database used for high volume, constantly changing data storage.
                  </p>
                </div>
              </div>
            </div>

            <div className='card' onMouseEnter={() => setMySQLIconColor('#02020a')} onMouseLeave={() => setMySQLIconColor('#f0386b')}>
              <div className="card-face front">
                <div className='card-content'>
                  {mySQLIcon}
                  <h3 className='card-title'>MySQL</h3>
                </div>
              </div>
              <div className='card-face back'>
                <div className='card-content'>
                  <p className='card-description'>
                    MySQL is a database management system that utilizes SQL language as a interface.
                  </p>
                </div>
              </div>
            </div>

          </div>

          <div className='card-row2'>

            <div className='card' onMouseEnter={() => setNodeJSIconColor('#02020a')} onMouseLeave={() => setNodeJSIconColor('#f0386b')}>
              <div className="card-face front">
                <div className='card-content'>
                  {nodeJSIcon}
                  <h3 className='card-title'>Node.JS</h3>
                </div>
              </div>
              <div className='card-face back'>
                <div className='card-content'>
                  <p className='card-description'>
                    Node.JS is a open source software, based on V8 by Google, that allows running JavaScript outside the browser, in an asynchronous event-driven runtime.
                  </p>
                </div>
              </div>
            </div>

            <div className='card' onMouseEnter={() => setNpmIconColor('#02020a')} onMouseLeave={() => setNpmIconColor('#f0386b')}>
              <div className="card-face front">
                <div className='card-content'>
                  {npmIcon}
                  <h3 className='card-title'>npm</h3>
                </div>
              </div>
              <div className='card-face back'>
                <div className='card-content'>
                  <p className='card-description'>
                    Npm is a online repository for publishing open-source Node.Js projects. It's today the larggest Node.Js package repository and most used package mannager.
                  </p>
                </div>
              </div>
            </div>

            <div className='card' onMouseEnter={() => setGitIconColor('#02020a')} onMouseLeave={() => setGitIconColor('#f0386b')}>
              <div className="card-face front">
                <div className='card-content'>
                  {gitIcon}
                  <h3 className='card-title'>Git</h3>
                </div>
              </div>
              <div className='card-face back'>
                <div className='card-content'>
                  <p className='card-description'>
                    Git is a open souce distributed version control system designed to handle everything from small to very large projects with speed and efficiency.
                  </p>
                </div>
              </div>
            </div>

          </div>

          <div className='card-row2'>

            <div className='card' onMouseEnter={() => setHtmlIconColor('#02020a')} onMouseLeave={() => setHtmlIconColor('#f0386b')}>
              <div className="card-face front">
                <div className='card-content'>
                  {htmlIcon}
                  <h3 className='card-title'>HTML</h3>
                </div>
              </div>
              <div className='card-face back'>
                <div className='card-content'>
                  <p className='card-description'>
                    MarkDown language used to build the foundation of every web application.
                  </p>
                </div>
              </div>
            </div>

            <div className='card' onMouseEnter={() => setCssIconColor('#02020a')} onMouseLeave={() => setCssIconColor('#f0386b')}>
              <div className="card-face front">
                <div className='card-content'>
                  {cssIcon}
                  <h3 className='card-title'>CSS</h3>
                </div>
              </div>
              <div className='card-face back'>
                <div className='card-content'>
                  <p className='card-description'>
                    Cascading Style Sheets is a mechanims utilized to apply styles to a web document.
                  </p>
                </div>
              </div>
            </div>

            <div className='card' onMouseEnter={() => setJavaScriptIconColor('#02020a')} onMouseLeave={() => setJavaScriptIconColor('#f0386b')}>
              <div className="card-face front">
                <div className='card-content'>
                  {javaScriptIcon}
                  <h3 className='card-title'>JavaScript</h3>
                </div>
              </div>
              <div className='card-face back'>
                <div className='card-content'>
                  <p className='card-description'>
                    JavaScript is a high-level programming language used both on client and server sides. Thats the engine that makes webpages run.
                  </p>
                </div>
              </div>
            </div>

          </div>

          <h2 className='section-title techs'>&lt;techs&gt;</h2>

        </section>
  )
}

export default Cards