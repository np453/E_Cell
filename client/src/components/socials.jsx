import React, { Component } from 'react';
import socialsvg from '../assets/social.svg'

class Socials extends Component {
    render() {
        return (
            <div className="container socials_container">
                <div className="row d-flex justify-content-center">
                <svg  className="img img-fluid" viewBox="0 0 272 256" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M140.852 15.7578C139.655 18.9246 138.459 22.0917 137.263 25.2585C136.496 27.2878 135.73 29.3168 134.963 31.3461C134.691 32.0656 134.54 32.8037 134.014 33.3032C132.774 34.4793 130.55 35.2277 129.06 36.0551C128.062 36.6095 127.064 37.1639 126.066 37.7183C125.552 38.0044 124.411 38.3636 124.05 38.8383C123.653 39.3614 123.841 40.3222 123.841 41.0455V47.2909V59.0587C128.996 58.4142 134.151 57.7701 139.305 57.1256C132.438 65.0501 125.57 72.9741 118.702 80.8986C117.01 82.8514 114.955 84.7311 113.694 87.0032C111.01 91.8398 108.386 96.7111 105.733 101.565C103.264 106.082 100.794 110.6 98.3242 115.118L120.543 114.172C126.295 113.927 132.204 114.296 137.747 112.665C142.316 111.321 146.885 109.978 151.454 108.634C152.061 108.455 153.954 108.253 154.385 107.764C154.788 107.306 154.78 105.575 154.894 104.989C157.05 93.9043 159.796 81.6896 166.09 72.1483C170.602 65.3087 176.691 59.3204 182.268 53.3561C184.445 51.0283 186.659 48.7283 188.758 46.3298C189.296 45.7154 190.073 45.0184 190.429 44.2722C190.658 43.7901 190.979 42.8715 190.837 42.4435C190.775 42.2579 189.34 41.5922 189.134 41.46C187.68 40.5255 186.239 39.5714 184.795 38.6218C180.736 35.9534 176.681 33.2784 172.599 30.6456C169.417 28.5927 166.244 26.416 162.887 24.6519C159.408 22.8232 155.576 21.5362 151.928 20.0914C148.242 18.6311 144.549 17.1875 140.852 15.7578Z" fill="black"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M265.958 184.934C264.188 186.602 260.965 188.841 258.417 187.823C257.137 187.312 256.044 186.189 254.879 185.465C253.509 184.615 252.222 183.764 251.061 182.63C248.745 180.368 246.991 177.063 244.255 175.292C243.336 174.696 241.541 174.569 240.903 173.618C240.618 173.192 240.591 172.545 240.644 172.052C240.758 170.99 241.331 171.053 240.373 170.273H241.861C241.89 169.699 241.316 169.651 240.889 169.725C241.087 168.814 241.29 165.248 239.629 166.864C238.189 168.265 238.91 170.589 237.89 172.106C237.11 173.268 235.038 172.327 234.759 171.049C234.633 170.475 235.265 169.578 235.341 169.015C235.506 167.767 234.949 166.688 234.139 165.742C232.363 166.926 233.37 169.375 232.358 170.93C231.442 172.337 229.402 171.68 228.007 171.433C226.336 171.136 224.446 171.436 222.846 171.042C220.431 170.445 221.333 167.61 221.094 165.78C220.838 163.819 218.856 161.098 219.452 159.12C220.091 156.997 223.829 156.538 225.616 156.022C229.7 154.844 235.525 154.618 238.561 151.32C240.976 154.013 242.918 157.097 245.451 159.689C248.187 162.49 251.109 165.075 253.735 167.988C256.469 171.02 259.29 173.993 261.924 177.113C263.073 178.474 264.083 179.94 265.271 181.269C266.328 182.449 267.443 183.536 265.958 184.934ZM144.575 132.558C145.83 131.891 145.99 132.309 145.989 133.684C145.628 133.024 145.27 132.847 144.575 132.558ZM133.936 159.276V156.853C135.145 156.822 134.401 158.894 133.936 159.276ZM133.64 162.884C133.64 161.811 133.611 160.789 133.92 159.746C134.082 160.883 134.393 161.867 133.64 162.884ZM138.841 236.581C139.952 236.685 141.665 235.919 142.599 236.791C143.559 237.687 143.482 240.294 143.71 241.505C144.085 243.504 144.418 245.511 144.735 247.521C144.942 248.838 145.199 250.176 143.71 250.68C141.508 251.425 138.363 250.362 136.068 250.266C131.535 250.075 127.005 249.81 122.468 249.718C118.071 249.629 113.664 249.699 109.287 250.157C107.31 250.363 105.377 250.728 103.42 251.058C102.388 251.233 99.6242 251.961 98.6925 251.092C96.9396 249.455 99.8539 245.633 101.107 244.554C103.434 242.551 106.742 241.106 109.659 240.236C111.218 239.771 113.816 238.466 115.044 239.926C115.987 241.046 115.949 242.541 117.299 243.39C120.427 245.356 118.597 239.716 116.642 239.021C117.955 235.949 120.457 240.287 121.494 241.329C121.864 241.699 123.064 242.922 123.586 242.307C123.976 241.847 123.197 240.199 123.052 239.75C122.832 239.069 122.277 238.033 122.436 237.294C122.726 235.957 124.601 235.593 125.724 235.481C127.466 235.309 129.174 235.861 130.896 236.046C133.537 236.329 136.198 236.333 138.841 236.581ZM121.354 110.656C117.916 110.93 114.456 110.404 111.026 110.834C107.781 111.242 104.723 112.433 101.663 113.528C106.211 102.861 112.096 93.1503 119.268 84.0536C122.839 79.5229 126.681 75.0235 130.54 70.7355C132.336 68.7406 134.193 66.8117 136.047 64.8729C137.701 63.1432 138.886 60.2057 140.871 58.914C142.565 57.8113 145.526 58.5977 147.403 58.6662C149.525 58.7435 152.108 58.9364 154.178 58.2301C155.677 57.7182 156.09 56.3523 154.212 56.307C151.998 56.2533 149.82 56.4841 147.577 56.2765C141.765 55.7395 136.163 54.8568 130.304 55.3575C128.961 55.4719 127.195 56.0437 125.877 55.8721C124.93 55.748 125.553 56.2243 124.895 55.4642C124.642 55.1735 124.339 54.4899 124.264 54.1037C123.845 51.9344 125.036 48.8345 125.321 46.6505C125.584 44.6293 125.351 42.4078 125.844 40.4396C126.293 38.6484 127.663 38.4095 129.349 38.2181C133.963 37.6942 138.671 37.4155 143.305 37.0207C153.881 36.1199 164.794 34.761 175.298 36.9871C179.091 37.7909 183.716 39.0338 187.104 41.0241C188.164 41.6462 189.233 42.3788 188.848 43.6678C188.448 45.0059 186.488 46.4194 185.517 47.3008C178.342 53.8145 171.412 60.4585 166.371 68.8163C159.944 79.4742 156.255 90.9848 154.091 103.198C153.625 105.825 153.193 107.2 150.49 107.956C147.588 108.769 144.787 109.296 141.778 109.544C134.976 110.102 128.153 110.114 121.354 110.656ZM123.658 40.0758C123.137 43.9555 122.431 47.8266 122.361 51.7369C122.335 53.2137 122.195 53.9537 120.625 54.2831C118.773 54.6713 116.891 54.9605 115.031 55.3633C106.054 57.3088 97.247 59.698 88.4646 62.3873C79.9293 65.0016 71.5343 67.9426 62.8073 69.8792C59.0533 70.7123 54.6605 71.2737 51.2413 73.1182C47.5631 75.1031 48.0471 78.3572 47.7169 81.9315C47.2758 86.707 45.8596 91.3309 45.3617 96.1044C45.1235 98.3854 44.9066 100.68 44.9426 102.975C44.9731 104.932 45.2534 107.095 43.9382 108.742C41.2995 105.215 40.0488 100.778 39.5288 96.4543C39.276 94.3527 39.3761 92.234 39.3038 90.1227C39.2454 88.4228 39.2833 85.7188 38.1761 84.2991C35.769 81.2139 32.6386 93.5779 32.3409 94.8982C31.8402 97.1204 31.4273 99.3613 30.9286 101.584C30.7074 102.569 30.4236 106.15 29.1037 106.507C26.3684 107.247 26.9689 99.5607 26.9256 98.3905C26.839 96.0282 26.7802 93.6633 26.8355 91.2992C26.8757 89.5926 27.2059 87.7408 27.0098 86.0335C26.5285 81.8414 24.1713 86.2581 23.5087 87.8185C21.8342 91.7577 21.0768 95.9741 19.5752 99.9763C19.3255 100.642 18.7386 102.883 17.8088 102.925C16.7742 102.971 16.7823 100.656 16.7232 99.9802C16.3799 96.0603 15.2204 92.1679 15.5703 88.2074C15.9237 84.2083 17.3255 80.097 19.3092 76.6186C23.5032 69.2644 31.077 65.0418 38.3315 61.1954C46.6336 56.7942 55.3986 53.3169 64.3507 50.4842C75.1171 47.0774 86.172 44.3208 97.2933 42.3591C102.951 41.3613 108.697 40.6476 114.413 40.0754C116.422 39.8743 118.432 39.7568 120.414 39.3745C121.163 39.2299 123.863 38.5428 123.658 40.0758ZM129.441 27.5205C126.605 27.5429 123.707 26.1677 120.943 25.5994C117.653 24.922 114.44 23.9419 111.156 23.2348C104.724 21.8504 98.2897 20.5003 91.8641 19.0853C89.0747 18.471 86.2717 17.9363 83.4931 17.2763C80.5204 16.5704 77.3088 15.7832 74.2662 16.5437C69.6542 17.6966 67.7061 22.7423 66.0127 26.68C64.8165 29.4613 63.8794 32.5615 62.014 34.9817C61.3498 35.8447 60.4056 36.8738 59.2013 36.5943C56.964 36.0755 57.3193 33.1148 57.6042 31.4782C58.0171 29.1033 58.6021 26.7561 59.0703 24.392C59.2589 23.4378 60.7211 17.1928 58.1107 18.1597C56.1741 18.8769 55.1496 23.6006 54.4166 25.2878C53.8718 26.5415 53.2946 27.7872 52.6834 29.0101C51.8676 30.6412 49.5402 36.0913 46.9634 35.3885C43.2759 34.3825 46.813 24.6881 47.4413 22.6448C47.7861 21.5233 51.5344 13.0174 48.3707 13.7125C47.0233 14.009 45.7108 16.5116 45.0238 17.5489C43.8056 19.3888 42.5912 21.2418 41.4445 23.127C40.2649 25.0658 39.6626 27.2726 38.4927 29.1833C37.8772 30.1889 36.6211 31.5289 35.3947 30.5979C33.4829 29.1477 34.6161 24.1032 34.9509 22.1956C35.5737 18.6492 37.121 15.0135 39.2439 12.1142C42.4338 7.75785 48.453 6.35019 53.5146 5.50389C60.048 4.41131 66.6723 4.71017 73.2331 5.35659C80.6117 6.08381 87.8777 6.86245 95.1507 8.34938C102.481 9.8479 109.814 11.3344 117.031 13.3162C120.431 14.2499 123.88 15.0776 127.231 16.1737C130.794 17.3386 134.272 18.7884 137.934 19.6277C136.646 22.8424 135.357 26.0571 134.069 29.2722C132.836 28.0524 131.153 27.5065 129.441 27.5205ZM192.584 36.379C193.714 35.7612 194.962 35.4696 195.374 34.1041C195.739 32.8975 195.116 31.5304 194.818 30.3721C193.985 27.1292 193.766 23.7699 194.503 20.4887C195.207 21.5639 197.844 25.6995 199.448 23.1958C200.415 21.6857 197.823 19.5133 197.067 18.4516C198.727 17.4271 201.098 14.6775 203.011 16.3357C204.247 17.4078 204.771 18.44 206.437 18.9612C208.459 19.5941 210.363 19.4491 212.428 19.2743C213.874 19.1522 214.223 18.9592 214.788 20.0727C215.231 20.948 215.46 22.0313 215.719 22.9712C216.23 24.8242 217.412 28.4754 216.012 30.2113C214.786 31.7318 210.028 30.4282 209.368 32.391C209.007 33.4616 210.727 33.4998 211.384 34.0295C212.198 34.6852 212.871 35.7287 213.313 36.6608C213.641 37.3501 214.139 38.4891 213.581 39.1939C212.811 40.1689 211.384 39.4294 210.763 38.7207C209.939 37.7793 209.671 36.4922 208.983 35.4669C207.721 33.5857 207.646 35.0823 207.302 36.4331C206.945 37.8365 206.101 37.7398 204.807 37.92C202.538 38.2366 200.245 38.6832 198.037 39.2913C196.905 39.6029 195.807 40 194.729 40.4639C194.034 40.7624 192.83 41.6667 192.076 41.6753C190.679 41.691 189.711 39.3547 188.99 38.3801C190.187 37.7116 191.381 37.037 192.584 36.379ZM267.599 179.435C264.11 175.248 261.089 170.698 257.647 166.473C254.252 162.307 250.324 158.664 246.514 154.89C244.716 153.109 242.993 151.155 241.008 149.577C239.527 148.399 238.388 148.381 236.607 148.902C231.546 150.385 226.393 152.169 221.604 154.381C217.144 156.441 213.082 159.086 208.245 160.234C203.309 161.407 198.176 161.783 193.116 161.493C187.926 161.195 183.031 160.115 178.095 158.528C173.421 157.024 168.548 155.712 164.55 152.733C160.359 149.61 157.121 145.118 154.121 140.893C152.602 138.754 151.094 136.508 150.071 134.084C149.183 131.98 148.603 129.497 147.009 127.782C146.618 128.337 146.132 128.812 145.933 129.462C145.843 129.758 146.375 129.749 146.321 129.984C146.218 130.427 145.628 130.878 145.286 131.119C144.055 131.985 144.048 131.296 144.371 132.915C144.559 133.859 144.203 135.989 142.663 135.293C143.23 135.972 142.33 136.828 142.036 137.387C141.833 137.155 141.582 137.074 141.281 137.144C141.844 138.265 141.511 138.295 140.966 139.185C140.866 139.348 140.513 140.2 140.564 140.128C140.006 140.922 139.362 141.122 139.037 142.111C138.77 142.923 138.838 143.816 138.541 144.627C138.181 144.13 137.821 143.632 137.461 143.135C137.534 143.526 137.681 144.105 137.852 144.46C137.959 144.682 138.42 145.2 138.414 145.321C138.389 145.774 137.825 145.665 137.664 146.055C137.362 146.787 137.798 146.895 137.634 147.609C137.445 148.428 136.938 148.101 136.698 148.799C136.652 148.932 137.008 149.454 136.951 149.74C136.872 150.144 136.505 150.37 136.376 150.73C136.046 151.645 136.166 152.314 135.709 153.192C135.532 153.532 135.274 153.758 135.149 154.145C135.04 154.485 135.275 155.209 135.064 155.514C134.044 156.983 134.188 154.453 134.265 153.825C134.914 148.557 136.997 143.119 138.903 138.195C139.85 135.749 140.772 133.226 141.959 130.882C142.437 129.939 142.989 128.965 143.779 128.243C144.778 127.33 146.195 126.964 147.1 125.945C146.957 126.105 148.081 125.042 147.901 125.392C148.062 125.079 147.781 124.656 147.881 124.354C148.005 123.979 148.24 123.9 148.501 123.571C148.971 122.981 149.529 122.687 148.791 121.936C149.886 121.694 150.409 121.338 150.628 120.166C150.788 119.308 150.465 119.364 151.028 118.792C151.593 118.218 151.879 118.666 152.235 117.671C152.661 116.481 152.943 114.862 153.199 113.617C153.421 112.529 152.881 110.93 153.798 110.162C154.959 109.189 155.997 109.601 155.789 107.646C155.586 105.739 156.179 104.584 156.774 102.78C157.962 99.1792 158.421 95.3768 159.463 91.7326C161.686 83.9554 165.614 76.9434 169.837 70.0976C173.74 63.7718 179.196 58.3824 184.464 53.1921C185.907 51.7705 187.333 50.3284 188.628 48.77C189.744 47.428 190.254 45.6009 191.326 44.327C191.978 43.5534 193.19 43.2224 194.1 42.8122C195.617 42.1279 197.425 41.2352 199.137 41.3736C198.457 43.6674 198.235 46.3478 200.243 48.0679C202.679 50.1544 204.887 47.9867 207.12 46.7971C211.191 44.6286 217.012 46.6192 220.561 43.369C221.406 42.595 221.642 41.3582 222.521 40.6352C223.166 40.1052 224.083 39.9706 224.809 39.5755C227.015 38.3751 228.085 36.1775 227.227 33.75C226.442 31.5308 225.222 30.7611 227.937 29.6364C230.14 28.724 230.978 27.3492 229.981 24.9015C229.03 22.5679 227.288 22.2992 225.639 20.7721C224.042 19.2929 225.876 17.5713 227.073 16.4609C228.615 15.0285 228.91 13.7376 227.122 12.248C225.249 10.6884 222.576 10.7429 220.392 11.5142C217.923 12.386 216.297 13.8354 215.252 16.1841C214.188 18.5753 211.551 17.908 209.416 17.2415C207.373 16.6044 206.841 15.2296 205.5 13.7492C204.009 12.1026 200.969 13.5107 199.21 14.263C194.877 16.1149 190.57 19.0377 190.398 24.2149C190.296 27.302 191.602 29.926 192.28 32.8237C192.901 35.4735 188.644 35.2647 187.907 37.828C180.043 33.6649 171.285 32.391 162.494 32.1076C153.151 31.8061 143.673 31.5644 134.409 33.0382C136.56 29.2919 137.695 25.1838 139.566 21.335C140.104 20.227 140.336 20.3217 141.525 20.6565C143.808 21.2994 146.074 22.0189 148.352 22.6812C156.675 25.1006 164.835 28.0157 172.882 31.2084C173.664 31.5188 175.411 32.3806 176.096 31.4434C176.887 30.3628 175.057 29.0306 174.317 28.487C171.076 26.1097 167.06 24.6668 163.431 22.999C155.497 19.3536 146.71 17.6231 138.432 14.9156C120.559 9.06964 102.068 4.62975 83.4947 1.69728C78.962 0.981654 74.381 0.876881 69.8286 0.345672C65.7962 -0.124838 61.7565 -0.114013 57.7245 0.371962C50.2775 1.27007 41.644 3.20778 37.438 10.0246C33.6411 16.1795 31.1064 23.0995 32.0753 30.4003C32.3664 32.5932 33.295 35.1901 36.001 34.6249C37.878 34.2329 38.8747 32.6381 39.7461 31.0816C41.0629 28.7302 42.3635 26.3788 43.7905 24.0904C44.3197 27.5216 42.3963 30.8956 42.6987 34.391C42.9044 36.7629 44.215 40.5103 47.2944 39.8388C51.515 38.9186 53.2521 32.3249 55.2814 29.1616C55.3843 31.5981 54.5303 33.9993 54.7916 36.4412C55.0495 38.8533 56.9342 41.1305 59.5814 40.7999C62.0781 40.4883 63.7008 37.8133 64.7612 35.7994C66.2369 32.9969 67.297 29.9921 68.7383 27.171C70.0892 24.5265 71.6894 21.3783 74.9145 20.8815C77.7929 20.4377 81.0915 21.4649 83.9346 21.8886C91.8212 23.0639 99.5489 25.0651 107.349 26.6819C115.713 28.4151 124.274 29.4678 132.38 32.2646C129.53 36.1439 122.071 35.3057 117.825 35.7221C111.409 36.3515 104.91 36.8251 98.5305 37.7538C92.2295 38.6708 86.0602 40.2989 79.8083 41.4807C73.5892 42.6564 67.3809 43.8341 61.3633 45.839C50.1905 49.5618 38.8314 54.2731 28.9874 60.7686C24.4071 63.7911 20.3384 67.2455 17.5092 72.0164C14.6617 76.817 13.2935 82.2454 12.7716 87.7674C12.4468 91.206 12.9985 94.1818 13.6647 97.5283C14.1472 99.9512 14.3033 104.008 16.2461 105.782C19.9541 109.169 23.0327 95.4329 23.7174 93.7739C24.2104 96.4926 23.4043 111.809 29.3539 110.563C32.0092 110.007 32.6115 106.363 33.0519 104.168C33.8552 100.166 34.5747 96.0835 35.9488 92.2294C36.8306 97.4224 37.1983 102.833 39.0981 107.793C40.36 111.087 43.9606 116.931 46.4709 111.292C48.3537 107.063 47.7077 102.209 47.9334 97.7189C48.1836 92.7432 49.6121 87.9437 50.1178 83.0167C50.3138 81.108 50.1364 78.9569 52.0544 77.9153C53.701 77.0215 56.1088 76.7304 57.9066 76.2312C63.2314 74.7528 68.591 73.3939 73.8908 71.8254C79.1928 70.2557 84.4214 68.422 89.6527 66.6324C94.6559 64.9208 99.7642 63.9477 104.828 62.482C107.707 61.6485 110.552 60.7767 113.471 60.0808C114.829 59.7572 116.205 59.5051 117.56 59.1699C118.565 58.9217 119.889 57.9849 120.922 58.0016C121.985 58.019 122.385 58.919 123.604 58.9897C124.916 59.0655 126.251 58.776 127.556 58.6758C130.736 58.4319 134.116 58.0375 137.289 58.4783C135.382 60.74 132.807 62.3034 130.55 64.177C127.947 66.3378 125.427 68.671 123.204 71.2226C118.73 76.3569 114.502 81.7838 110.573 87.346C106.698 92.8333 103.578 98.8378 100.866 104.973C99.5141 108.03 98.2019 111.153 97.2682 114.367C96.8847 115.686 96.5715 117.011 95.8791 118.212C95.2439 119.313 94.3489 120.262 95.0997 121.592C95.6166 121.268 96.0809 120.866 96.5483 120.477C96.0082 124.282 94.8426 127.963 94.2433 131.756C93.6526 135.493 93.6766 139.336 93.7148 143.11C93.7952 151.014 94.3829 158.739 95.9862 166.492C97.6077 174.331 99.6907 182.111 102.317 189.674C104.846 196.955 107.383 204.591 110.913 211.454C114.682 218.784 119.166 226.491 124.623 232.696C121.059 234.156 116.523 233.883 112.749 234.471C108.804 235.086 105.391 236.246 102.029 238.429C98.6276 240.638 96.7811 243.482 96.311 247.509C95.9769 250.376 94.9845 254.345 98.7455 255.098C101.451 255.64 104.475 254.75 107.185 254.53C111.927 254.146 116.675 253.906 121.427 253.699C126.167 253.492 130.907 253.31 135.648 253.163C137.878 253.094 140.109 253.059 142.339 252.979C143.338 252.943 143.943 252.928 144.839 253.217C145.548 253.445 145.496 253.919 146.284 253.333C147.556 252.387 147.295 249.404 147.259 248.093C147.205 246.069 147.013 244.022 146.618 242.036C146.384 240.856 143.54 233.25 145.752 232.93C143.183 230.107 142.157 226.076 141.002 222.538C139.557 218.105 138.287 213.684 137.291 209.125C135.163 199.386 134.222 189.54 134.222 179.575C144.088 185.656 154.526 188.95 166.146 189.317C177.699 189.683 190.391 188.734 201.361 184.891C206.441 183.111 210.992 180.773 215.347 177.624C216.909 176.496 218.581 173.939 220.63 173.983C223.075 174.036 225.814 174.961 228.242 175.357C232.886 176.114 238.948 176.541 242.879 179.414C245.015 180.974 246.546 183.158 248.452 184.956C249.901 186.324 251.819 187.066 253.258 188.434C254.81 189.91 254.194 191.838 256.768 191.957C258.969 192.059 261.382 191.174 263.28 190.135C267.066 188.061 271.098 183.636 267.599 179.435Z" fill="#9C3D30"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M231.203 80.815C236.745 84.7511 243.101 87.44 248.891 90.9849C250.341 91.8721 254.857 93.7144 254.813 95.3602C254.787 96.3225 253.43 97.5291 252.836 98.196C251.818 99.3384 250.86 100.493 249.921 101.701C245.621 107.236 241.572 112.822 236.911 118.079C236.21 118.869 234.096 122.645 233.414 120.77C233.104 119.92 233.359 118.964 232.553 118.172C232.138 117.763 230.535 117.538 231.002 116.663C231.313 116.803 231.625 116.943 231.936 117.083C231.694 116.383 231.712 115.616 231.35 114.955C231.124 114.544 230.684 114.349 230.531 113.886C230.32 113.247 230.678 112.504 230.618 111.845C230.559 111.187 230.218 110.566 230.015 109.946C228.809 106.27 228.376 102.564 227.759 98.7717C227.148 95.0188 226.197 91.3835 225.823 87.5888C225.429 83.5808 224.945 79.5809 224.3 75.6049C225.451 75.7665 226.337 77.018 227.151 77.7255C228.432 78.8374 229.822 79.8337 231.203 80.815ZM226.859 119.618C226.595 119.411 226.388 119.156 226.239 118.853C228.955 117.508 227.316 119.803 226.859 119.618ZM225.208 116.749C224.024 117.075 223.173 117.141 222.261 116.654C222.174 116.608 222.274 116.252 222.118 116.179C221.981 116.116 221.773 116.194 221.656 116.135C221.259 115.932 220.563 116.375 220.495 115.601C222.006 115.139 223.492 114.286 225.087 114.142C227.304 113.942 227.201 116.199 225.208 116.749ZM220.021 112.287C218.406 112.665 217.075 113.547 215.359 113.317C213.748 113.101 212.348 112.266 211.077 111.303C214.256 110.403 217.59 110.241 220.766 109.37C221.801 109.087 223.16 108.339 224.274 108.64C225.512 108.975 225.591 110.135 225.962 111.191C223.98 111.547 221.983 111.829 220.021 112.287ZM209.918 107.809C208.366 108.18 206.78 108.99 205.483 107.591C205.273 107.365 205.09 107.591 205.115 106.895C205.141 106.162 205.806 105.689 206.379 105.431C207.725 104.824 209.612 105.217 211.042 105.127C213.322 104.985 215.644 104.511 217.9 104.146C219.462 103.894 221.075 103.333 222.671 103.444C223.904 103.529 225.391 104.58 223.594 105.346C221.959 106.044 219.506 105.937 217.734 106.24C215.114 106.686 212.504 107.191 209.918 107.809ZM208.402 100.508C208.503 100.61 208.603 100.713 208.704 100.815C208.687 100.811 209.299 100.316 209.461 100.302C210.248 100.233 211.039 100.288 211.827 100.243C213.643 100.141 215.472 99.8244 217.256 99.4761C218.708 99.1923 220.188 98.7032 221.683 98.8258C222.977 98.9317 223.113 99.197 223.198 100.446C219.894 100.446 216.49 100.377 213.243 101.076C211.129 101.531 208.799 102.886 207.741 100.443C207.961 100.465 208.182 100.486 208.402 100.508ZM210.468 95.2195C211.287 95.8434 213.521 94.8058 214.503 94.7022C215.569 94.5893 216.572 94.4721 217.606 94.2065C218.522 93.9707 221.554 92.7931 222.256 93.9193C223.334 95.6447 218.971 95.9614 218.279 96.0468C215.379 96.4052 212.369 96.723 209.546 97.4839C209.853 96.7292 210.161 95.9745 210.468 95.2195ZM214.447 89.3588C214.659 90.1563 221.219 87.2173 221.339 89.3533C221.431 90.9922 214.848 91.8087 213.665 91.6649C213.942 90.9102 214.679 90.2344 214.447 89.3588ZM216.65 84.3455C216.789 82.7368 217.005 82.7461 218.295 82.5945C219.279 82.4789 220.631 81.9021 220.376 83.6558C220.156 85.1574 216.509 85.9689 216.65 84.3455ZM218.995 78.8104C219.305 77.9467 220.004 79.1092 220.018 79.5484C220.057 80.7171 219.171 80.4643 218.318 80.4643C218.556 79.9184 218.781 79.3663 218.995 78.8104ZM229.792 72.3272C229.618 72.1177 228.641 72.0376 228.363 71.936C227.679 71.6854 227.776 71.1515 226.902 71.6781C226.858 71.634 226.941 71.2381 226.894 71.2199C226.87 71.2107 226.257 70.9795 226.058 70.8519C225.577 70.5441 225.144 70.243 224.703 69.8567C224.234 69.4465 223.763 68.8512 223.227 68.5245C223.001 68.3868 222.816 68.1916 222.544 68.1494C221.837 68.0404 222.039 68.533 221.421 68.6308C221.04 68.6911 220.763 68.2465 220.265 68.4382C219.835 68.6037 219.585 69.2072 219.393 69.5664C218.696 70.8735 218.158 72.2804 217.476 73.6015C213.986 80.3568 210.02 86.8558 206.64 93.6742C205.012 96.9588 203.313 100.266 202.167 103.757C201.341 106.275 199.475 109.953 201.08 112.468C202.248 114.297 204.585 115.087 206.449 115.971C209.255 117.301 211.841 119.039 214.678 120.329C218.06 121.866 221.345 123.474 224.642 125.191C226.048 125.924 227.317 126.978 228.719 127.672C229.576 128.096 230.9 127.372 231.179 128.345C232.253 127.043 233.992 127.911 235.235 126.995C235.966 126.456 236.5 125.394 237.11 124.73C238.025 123.735 239.018 122.812 239.951 121.834C243.655 117.95 247.076 113.906 250.446 109.735C253.665 105.751 257.425 101.988 260.144 97.6277C261.224 95.8968 261.42 94.0816 260.707 92.1695C260.187 90.7745 258.933 88.6683 257.143 89.5919C257.822 88.4645 255.203 87.2606 254.408 87.0402C254.396 87.0371 254.24 87.9032 254.018 87.8815C254.097 87.8892 253.353 85.9627 253.026 85.7157C252.054 84.9807 250.873 84.1232 249.813 83.5182C248.841 82.9634 247.815 82.6885 246.874 82.0676C245.733 81.3152 244.685 80.4229 243.54 79.6756C242.433 78.9542 241.201 78.1013 239.978 77.6053C238.918 77.175 237.966 77.0907 237.012 76.3855C235.832 75.5129 234.803 74.921 233.442 74.3198C232.265 73.7998 230.634 73.3456 229.792 72.3272Z" fill="#9C3D30"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M69.0918 176.807C69.3083 176.298 69.5241 175.79 69.7406 175.282C70.0081 176.168 70.0831 176.609 69.0918 176.807ZM69.3799 179.155C68.9109 179.239 69.0957 177.768 69.0957 177.512C69.9057 177.97 69.2349 178.52 69.3799 179.155ZM68.6488 174.911C69.0485 174.675 69.4483 174.439 69.8481 174.203C69.2913 175.234 69.5098 174.59 69.7394 175.279C69.3196 175.399 68.9113 175.259 68.6488 174.911ZM66.2796 182.973C64.7811 188.41 60.0215 192.698 54.9943 194.919C52.1055 196.195 49.2655 196.514 46.1459 196.372C44.9427 196.317 43.5269 195.926 42.369 195.999C41.4775 196.055 41.5177 196.093 40.7793 196.848C40.4526 196.246 40.6892 195.824 40.0339 195.474C39.2162 195.037 38.8767 195.546 38.4712 196.151C37.9403 195.601 37.7231 195.314 37.0353 194.987C37.0569 194.997 36.3769 194.971 36.4047 194.98C36.2818 194.942 35.5422 194.467 35.3106 194.38C34.3603 194.023 33.2615 193.877 32.3847 193.365C31.6176 192.919 30.9859 191.665 30.1083 192.629C30.1075 191.019 27.939 190.351 26.9226 189.508C25.3344 188.19 24.0717 186.239 23.2799 184.352C22.4355 182.34 22.1537 180.411 21.7586 178.337C21.4825 176.888 19.6747 174.793 20.7603 173.331C21.019 173.944 20.8976 174.572 21.3271 175.128C21.7137 174.383 21.9264 173.549 22.1011 172.734C22.1869 172.335 22.6841 171.163 22.6277 170.815C22.5129 170.102 21.6314 170.064 22.1201 169.191C23.1338 170.294 23.9518 168.357 23.186 167.585C22.8078 168.011 22.6691 168.496 22.4947 169.024C21.498 167.012 24.2565 167.66 23.653 165.843C24.6597 165.65 25.2385 165.396 25.6212 164.401C26.0469 163.295 25.7337 163.053 26.7003 162.322C27.0328 162.071 27.973 161.709 28.1451 161.295C28.4779 160.496 27.6309 160.259 28.3728 159.51C28.6233 159.95 29.5999 160.82 30.1346 159.992C30.2417 159.827 29.792 159.71 30.1191 159.329C30.6035 158.766 31.1456 158.214 31.9648 158.333C31.3161 156.711 35.4614 156.583 36.523 156.2C37.587 155.817 38.4897 155.565 39.6179 155.476C40.7448 155.387 40.8009 155.057 41.7551 154.378C41.8359 155.349 42.0694 155.136 42.7595 155.307C42.9254 155.023 43.0955 154.99 43.2694 155.211C43.4426 155.376 43.6545 155.453 43.9043 155.444C44.2831 155.464 44.7131 155.414 45.1101 155.422C46.0422 155.44 47.0038 155.363 47.9181 155.382C48.1539 155.343 48.3743 155.261 48.5808 155.136C48.667 155.299 48.7536 155.461 48.8394 155.624C49.3238 155.685 49.3613 156.292 49.9571 155.628C50.1334 156.472 50.6399 156.033 51.1749 156.262C51.6629 156.471 51.7406 156.805 52.191 157.038C52.4871 157.278 52.8045 157.31 53.144 157.134C53.4668 157.373 53.7946 157.605 54.1271 157.831C54.7399 158.177 55.4621 158.389 56.1078 158.662C56.5373 158.839 56.9641 159.024 57.3875 159.215C57.4002 159.726 57.6295 159.906 58.0749 159.756C58.4773 160.093 58.5906 160.079 58.9811 160.653C59.8657 161.952 60.6505 162.962 61.7678 164.123C66.6241 169.172 68.116 176.311 66.2796 182.973ZM67.77 161.503C65.5775 158.567 62.4742 155.205 59.6855 153.35C58.272 152.41 56.2879 150.723 54.5594 150.225C54.1496 150.107 53.7254 150.1 53.3226 149.976C53.0114 149.881 52.842 149.561 52.4871 149.504C52.2389 149.463 52.2115 150.019 51.9478 149.968C51.3965 149.86 51.047 149.313 50.6577 148.971C49.8214 150.412 49.3675 147.989 48.1396 149.618C46.6782 147.327 43.2451 147.828 40.9115 147.943C40.2194 147.977 39.8943 148.224 39.2807 148.406C38.7097 148.576 38.6533 148.532 38.0296 148.527C36.4766 148.515 35.0979 148.711 33.6624 149.393C31.2507 150.538 29.037 152.323 26.7463 153.704C24.1861 155.247 21.8784 157.211 19.9198 159.467C12.8394 167.627 10.9461 179.538 16.5918 188.997C25.5594 204.022 48.6909 205.627 61.7984 195.433C71.925 187.557 75.7787 172.225 67.77 161.503Z" fill="#9C3D30"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M178.764 119.223C178.513 119.823 176.162 119.621 176.111 118.913C176.034 117.855 179.202 118.179 178.764 119.223ZM181.261 118.83C182.593 118.938 184.781 119.843 186.064 119.296C188.023 118.462 185.966 117.182 184.915 116.799C183.846 116.41 182.253 116.616 181.703 115.498C181.29 114.657 182.312 112.31 181.044 112.687C179.713 113.083 180.1 116.446 178.012 115.312C177.016 114.771 177.422 111.477 175.754 113.16C175.297 113.62 175.258 114.466 174.653 114.809C174.036 115.16 173.262 114.795 172.611 114.825C170.886 114.906 170.336 116.519 172.084 117.159C172.731 117.396 175.169 117.685 173.692 118.742C172.761 119.408 170.694 118.011 169.895 119.17C168.797 120.762 171.739 120.798 172.529 121.274C173.868 122.081 172.762 123.965 172.869 125.306C173.032 127.356 174.223 126.928 174.656 125.193C175.023 123.721 174.568 121.603 176.787 122.187C180.4 123.14 174.777 127.727 177.424 128.901C179.112 129.65 179.351 125.604 179.482 124.907C179.967 122.336 181.411 122.936 183.6 123.014C186.156 123.106 186.773 121.216 184.066 120.674C183.202 120.501 182.014 120.72 181.264 120.169C180.82 119.844 180.21 118.745 181.261 118.83Z" fill="#9C3D30"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M86.8755 202.84C84.8067 202.099 81.3457 202.259 80.8338 204.931C80.6197 206.049 81.0368 207.232 81.8093 208.045C82.7051 208.987 84.1317 209.074 84.0555 207.434C84.0025 206.298 82.9219 205.312 84.8218 205.083C86.004 204.941 87.7527 205.825 87.8115 207.131C87.9445 210.075 82.8489 210.305 80.9711 209.796C77.2441 208.786 78.2567 204.883 80.8161 203.101C81.4772 202.641 83.3743 201.932 83.4609 200.976C83.5761 199.708 82.008 199.967 81.2394 200.134C75.5898 201.363 74.3584 210.828 80.2617 212.612C82.9424 213.422 86.7177 212.586 88.3334 210.158C89.8482 207.881 89.8686 203.911 86.8755 202.84Z" fill="#9C3D30"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9685 135.841C10.2024 136.691 8.43637 137.541 6.6707 138.391C6.08691 137.142 5.10065 133.729 3.61992 133.294C1.2229 132.588 2.74926 136.308 3.16294 137.159C3.50277 137.857 4.29108 138.94 4.09971 139.772C3.84299 140.894 2.26019 141.292 1.43168 141.871C-0.618543 143.303 -0.602305 146.312 2.3669 145.037C4.04713 144.316 6.1275 142.314 7.41532 144.587C8.00993 145.635 9.41876 151.493 10.8902 147.662C11.8007 145.29 7.41841 142.826 9.57881 140.819C10.2743 140.174 11.0885 140.119 11.7833 139.748C13.4612 138.852 12.5152 137.195 11.9685 135.841Z" fill="#9C3D30"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M270.88 50.9635C269.827 50.5785 268.524 49.8265 267.354 50.0828C266.11 50.355 265.61 51.6007 264.705 52.3496C262.247 54.3859 260.815 51.3509 259.464 49.6877C258.188 48.1173 256.632 47.7361 254.832 48.7011C254.114 49.0858 251.093 50.8483 251.62 51.9776C251.999 52.7903 253.492 52.0608 254.001 51.8833C255.106 51.4986 256.133 51.1619 257.263 51.7229C259.384 52.7744 259.934 55.6582 262.499 56.1078C265.152 56.5729 265.239 54.0483 267.132 53.098C268.402 52.4613 269.286 53.5887 270.51 53.364C271.677 53.1502 272.217 51.4522 270.88 50.9635Z" fill="#9C3D30"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M249.463 61.1378C250.401 61.3416 251.014 59.5218 251.601 59.0602C252.575 58.2951 254.264 58.1408 255.256 58.9109C257.194 60.4141 256.526 63.6593 259.284 64.5052C261.75 65.2615 262.911 62.0143 264.987 61.2059C266.193 60.7358 267.518 60.428 267.047 58.7412C266.722 57.5748 265.764 57.2752 264.722 57.7233C262.932 58.4926 262.324 61.6269 260.202 61.683C258.007 61.741 257.769 58.5757 256.826 57.1971C255.389 55.0958 252.435 54.5882 250.756 56.5974C250.249 57.2036 247.676 60.7508 249.463 61.1378Z" fill="#9C3D30"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M206.062 25.2563C207.367 26.1494 209.968 26.1184 211.171 25.0108C212.394 23.8838 210.761 23.7106 209.764 23.745C208.997 23.7717 207.562 24.1517 207.999 22.8276C208.387 21.6527 210.518 22.2507 210.696 20.961C209.092 20.6734 207.325 20.777 206.139 22.0377C205.281 22.949 204.84 24.42 206.062 25.2563Z" fill="#9C3D30"/>
                </svg>
                </div>
                <div className="row m-0 d-flex justify-content-center">
                <h2>We’re 10k strong</h2>
                </div>
                <div className="row m-0">
                    <div className="col-md-4">
                        <h4>facebook followers</h4>
                        <h5>10500+</h5>
                    </div>
                    <div className="col-md-4">
                        <h4>instagram followers</h4>
                        <h5>1050+</h5>
                    </div>
                    <div className="col-md-4">
                        <h4>Linkedin followers</h4>
                        <h5>880+</h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default Socials;