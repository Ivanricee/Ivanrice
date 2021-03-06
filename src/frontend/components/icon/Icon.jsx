import React from 'react'

const Icon = ({ icon }) => {
  switch (icon) {
    case 'exp':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="47"
          height="48"
          x="0"
          y="0"
          version="1.1"
          viewBox="0 0 69 62"
          xmlSpace="preserve"
        >
          <image
            width="65"
            height="62"
            x="0"
            y="0"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAAA+CAMAAACcE/x8AAABHGlDQ1BpY2MAACiRY2BgMnB0cXJl EmBgyM0rKQpyd1KIiIxSYD/PwMbAzAAGicnFBY4BAT4gdl5+XioDBvh2jYERRF/WBZmFKY8XcCUX FJUA6T9AbJSSWpzMwMBoAGRnl5cUAMUZ5wDZIknZYPYGELsoJMgZyD4CZPOlQ9hXQOwkCPsJiF0E 9ASQ/QWkPh3MZuIAmwNhy4DYJakVIHsZnPMLKosy0zNKFAwtLS0VHFPyk1IVgiuLS1JzixU885Lz iwryixJLUlOAaiHuAwNBiEJQiGkANVpokuhvggAUDxDW50Bw+DKKnUGIIUByaVEZlMnIZEyYjzBj jgQDg/9SBgaWPwgxk14GhgU6DAz8UxFiaoYMDAL6DAz75gAAwMZP/aCJEEUAAAAgY0hSTQAAeiYA AICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAklQTFRF////qLntqLntqLntqLntqLnt qLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLnt qLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLnt qLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLnt qLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLnt qLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLnt qLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLnt qLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLnt qLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLnt qLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLnt 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 OCl0G2zQAAAAAElFTkSuQmCC"
          />
        </svg>
      )

    case 'portfolio':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="40"
          height="48"
          x="0"
          y="0"
          version="1.1"
          viewBox="0 0 50 53"
          xmlSpace="preserve"
        >
          <image
            width="42"
            height="53"
            x="0"
            y="0"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAAA+CAMAAABZYWbtAAABHGlDQ1BpY2MAACiRY2BgMnB0cXJl EmBgyM0rKQpyd1KIiIxSYD/PwMbAzAAGicnFBY4BAT4gdl5+XioDBvh2jYERRF/WBZmFKY8XcCUX FJUA6T9AbJSSWpzMwMBoAGRnl5cUAMUZ5wDZIknZYPYGELsoJMgZyD4CZPOlQ9hXQOwkCPsJiF0E 9ASQ/QWkPh3MZuIAmwNhy4DYJakVIHsZnPMLKosy0zNKFAwtLS0VHFPyk1IVgiuLS1JzixU885Lz iwryixJLUlOAaiHuAwNBiEJQiGkANVpokuhvggAUDxDW50Bw+DKKnUGIIUByaVEZlMnIZEyYjzBj jgQDg/9SBgaWPwgxk14GhgU6DAz8UxFiaoYMDAL6DAz75gAAwMZP/aCJEEUAAAAgY0hSTQAAeiYA AICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAARFQTFRF////qLntqLntqLntqLntqLnt qLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLnt qLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLnt qLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLnt qLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLnt qLntqLntqLntqLntqLntqLntqLntqLnt////6+GHgQAAAFp0Uk5TAAAKOXOQlZQDW8fMJZrCrqqr qcBGs5ckDxEMh1C9kRB/TruSFYFBuowBeTFHSnynV5wegrG/vrBoImW5wxaZiphmNToOKFNdWl8+ BifGiyaOUhJRsqGTTGyPjohYdgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAH dElNRQfkBBwEKS9G0Le9AAABrUlEQVRYw+3Xd0/CQByAYa5sjtZRkKLUypDKEAVKEUWBsmQPZX3/ LyJFyJWES5qeJkT7/tVLfnmStpcOi+XIA7goq83ucG5z2G1W6uCYPs3l9sC9PG6Xcc1LQ+bk9GzX OQtpr3HN54cXAS646/IK+n3GtRAPrwXN+gbyIeNaOAKjMc36FkbCx6LFRXiX0KyTUIzr0KhU+v5A GQY+PGrWWchkDs2lU5RGy+V5SBSfzyEtSWapJZEmkWsS0hhyjUFagVwrIE0m12RT+1VNLkqbijK5 Jj6VcttKzy+6tDJ+in5Fj4rYG36ujLRK1YmJrlGAUupWa11ZH9Ro3Fy1grQG18AkUAkQkOR1UgAk KAE3xzV0vE83NTcXotzET+w/LVvtd0ydbg/0NzdJ7oNet4Oba7eQJnoGmDxDDvRZVWP7gBvi50Sk sfh7ZRfASFTnxREQ7Pg5Vtd+G3MgOFHPZRIE3Jh090an6GJPo6RaMTzd7YLpxyepBgez+fcGnc8G kFjTmamZmqmZ2j/Qfva7l/DfQ41HWpZcyyJtQfzDwCyQ1lOWK4fTcI7VUulZzP5mX0lC27TpqE8+ AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTA0LTI4VDA0OjQxOjQ3KzAzOjAwjiGJKAAAACV0RVh0 ZGF0ZTptb2RpZnkAMjAyMC0wNC0yOFQwNDo0MTo0NyswMzowMP98MZQAAAA3dEVYdGljYzpjb3B5 cmlnaHQAQ29weXJpZ2h0IDE5OTkgQWRvYmUgU3lzdGVtcyBJbmNvcnBvcmF0ZWQxbP9tAAAAIHRF WHRpY2M6ZGVzY3JpcHRpb24AQWRvYmUgUkdCICgxOTk4KbC66vYAAAAhdEVYdGljYzptYW51ZmFj dHVyZXIAQWRvYmUgUkdCICgxOTk4KYKQhdIAAAAadEVYdGljYzptb2RlbABBZG9iZSBSR0IgKDE5 OTgpdBts0AAAAABJRU5ErkJggg=="
          />
        </svg>
      )
    case 'skill':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="38"
          height="48"
          x="0"
          y="0"
          version="1.1"
          viewBox="0 0 50 43"
          xmlSpace="preserve"
        >
          <image
            width="45"
            height="43"
            x="0"
            y="0"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAAA+CAMAAABKtiYZAAABHGlDQ1BpY2MAACiRY2BgMnB0cXJl EmBgyM0rKQpyd1KIiIxSYD/PwMbAzAAGicnFBY4BAT4gdl5+XioDBvh2jYERRF/WBZmFKY8XcCUX FJUA6T9AbJSSWpzMwMBoAGRnl5cUAMUZ5wDZIknZYPYGELsoJMgZyD4CZPOlQ9hXQOwkCPsJiF0E 9ASQ/QWkPh3MZuIAmwNhy4DYJakVIHsZnPMLKosy0zNKFAwtLS0VHFPyk1IVgiuLS1JzixU885Lz iwryixJLUlOAaiHuAwNBiEJQiGkANVpokuhvggAUDxDW50Bw+DKKnUGIIUByaVEZlMnIZEyYjzBj jgQDg/9SBgaWPwgxk14GhgU6DAz8UxFiaoYMDAL6DAz75gAAwMZP/aCJEEUAAAAgY0hSTQAAeiYA AICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAc5QTFRF////qLntqLntqLntqLntqLnt qLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLnt qLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLnt qLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLnt qLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLnt qLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLnt qLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLnt qLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLnt qLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLntqLnt////ExdTIwAAAJl0Uk5T AAAaTXicv7aOajsJAjqlzHceBGSuLkeoFh+sdAYFbBiiWibCgAuqFz0oxoYNqWB5Ny26ibchB4FE ClK9kjAnZpZRElZ9gjITKhsOTgwZw8W5nzGmwQFAYrEjyMu7yj5GyRG1D76aaHGwem98ObIQszhc p2eeLH5eX41MwG4DFJdLKZuPiIqdJAhINjM8VyKMxCV7hIVzcmt2P/6p5AAAAAFiS0dEAIgFHUgA AAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfkBBwEKhjVQEFxAAACw0lEQVRYw+3V61vSUBzA 8R2VUsF+ykUqp2KIBVQqiOU1rwhqUpaiwsS8VJpolmGGZVopZhc1u/y5LWNjO7DtsHc+j99X7Hm2 z8M5O+eMos46DSFBObl5mnPn8wsKtUgyJUVXdAGSFZeoVfQGSGU0qVRKQZj5oirl0mWRAmW0CqW8 ArBMKpRKC65U6bJXrlhxpdqWvVKII1BzNXvlWppirMxesTtwxXk9eyXnBq7cVDG7dC2u1KlZdfUu MeLWqlFQlQhp8CBVSuMtAeK4jdQpqKm5hUNa25BaBaH2Ox3s7NS4O7uQGsXU3dPRW+VFqM9j8vn7 ESJS7AODAuWuu2GIHUbg3v1hpFgK8T946OSVkVEjP6muAj25EgQY45Vx4UKZCJIrFghVc7+bWkXr ZKiIVPGFgZnkLiJT4jXb+ohQKZiA6RnuogzbPrNeMkXHHo555dzVHL4Lc8kULzuddfwfC+PKYzLl CQNP+QFRaeftPJGiZ7+jC7S08oxIWQxDyEthiiPKn5g9REoxu9+WcGX5+QqTjUK/AHhJ4wrU6heS ymp3Z3d6kXa9UBmdhdArKk2BhZEYyBVaaxQo7L3mmQwKvEbrsgzzJqVozQDB8kwKDOg0skx+SonE IeSjMipTk41mOaUjpfQCWJYyKzBk6jfKKBu8Msh+AlfeSijQ4nlXI4ls+nnlvRUYOyWlwPRWl2Fd s33S3Af3RzfXp9iaNvWm2QHtLEkrEG/eLenrOimxFdkr5dor9Pg+J9v/MgbwVSejAFjXkov02/fo cpRvOtzC5Tpg34R4QOm70TnyX9mQe187/QpKLKnUbx84ApljVtsoJYXbd4nxw92MHdppSkk5Qns/ nGzH8z+l+jV/zN5QIqdUFLmAqH05xWAgQ8Akp/yeDJApwwIl7ZEeevFP7Ei5mF+gxJkpUf9OzISt STmbjjrrtPQXTpj2vb5A5gUAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDQtMjhUMDQ6NDI6MjQr MDM6MDCSkSExAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA0LTI4VDA0OjQyOjI0KzAzOjAw48yZ jQAAADd0RVh0aWNjOmNvcHlyaWdodABDb3B5cmlnaHQgMTk5OSBBZG9iZSBTeXN0ZW1zIEluY29y cG9yYXRlZDFs/20AAAAgdEVYdGljYzpkZXNjcmlwdGlvbgBBZG9iZSBSR0IgKDE5OTgpsLrq9gAA ACF0RVh0aWNjOm1hbnVmYWN0dXJlcgBBZG9iZSBSR0IgKDE5OTgpgpCF0gAAABp0RVh0aWNjOm1v ZGVsAEFkb2JlIFJHQiAoMTk5OCl0G2zQAAAAAElFTkSuQmCC"
          />
        </svg>
      )
    case 'design':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" fill="white">
          <path d="M51.794 72.162a4.53 4.53 0 10-9.06 0 4.53 4.53 0 009.06 0zM183.265 52.691a4.53 4.53 0 100-9.06 4.53 4.53 0 000 9.06zM130.677 107.253c.613 0 1.236-.141 1.82-.439a17.931 17.931 0 009.438-12.439 4.001 4.001 0 00-3.121-4.719c-2.158-.426-4.275.961-4.719 3.121a9.962 9.962 0 01-5.246 6.916 4.001 4.001 0 001.828 7.56z" />
          <path d="M241.357 186.162h-16.092v-8a4 4 0 00-4-4h-5.983l10.63-90.404c.32-2.727-.439-5.414-2.141-7.568s-4.141-3.518-6.867-3.838l-19.311-2.271c-2.744-.33-5.416.441-7.568 2.141a10.207 10.207 0 00-3.84 6.867l-11.178 95.074h-12.944l11.21-26.137a20.139 20.139 0 00.193-15.516 20.142 20.142 0 00-10.834-11.107 20.103 20.103 0 00-15.516-.193 20.139 20.139 0 00-11.109 10.834l-18.066 42.119h-2.803l14.988-54.203c10.196-1.925 19.077-9.17 22.484-19.721 1.033-3.201 1.459-7.354 1.262-12.342-.135-3.506-.805-6.896-1.422-9.803a43.52 43.52 0 01-.959-9.447c.141-21.666 17.141-35.543 17.305-35.674a4.002 4.002 0 001.125-4.85 4.012 4.012 0 00-4.469-2.191c-21.794 4.777-39.511 13.396-52.66 25.618l-.013.012c-9.86 9.164-15.005 18.358-17.584 24.458-2.512 5.941-3.354 11.715-2.498 17.162.832 5.304 3.088 10.159 6.342 14.32l-8.15 21.997-2.417-6.894a20.14 20.14 0 00-10.346-11.566 20.141 20.141 0 00-15.494-.863c-5.109 1.793-9.217 5.467-11.564 10.348s-2.652 10.383-.861 15.492l5.383 15.356v.002l.001.002 4.784 13.647v.003l.002.004 3.201 9.133H49.265a4 4 0 00-4 4v60.574c0 19.533 15.893 35.426 35.426 35.426h109.148c19.533 0 35.426-15.893 35.426-35.426v-.574h16.092c8.771 0 15.908-7.137 15.908-15.908V202.07c0-8.772-7.137-15.908-15.908-15.908zm-26.395-77.792l-1.401 11.918-23.836-2.802 1.401-11.918zm-18.303-30.345l19.311 2.271c.604.07 1.145.373 1.521.85.377.479.545 1.074.475 1.678l-2.07 17.601-23.836-2.802 2.07-17.602a2.284 2.284 0 012.529-1.996zm-7.868 47.406l23.836 2.802-5.343 45.44-24.164-.01zm-53.424 28.396l22.563 9.678-2.549 5.943-22.563-9.677zm7.992-18.632a12.201 12.201 0 016.727-6.559 12.22 12.22 0 019.395.117 12.204 12.204 0 016.559 6.725 12.194 12.194 0 01-.117 9.395l-4.839 11.281-22.563-9.678zm-13.695 31.927l16.412 7.039h-19.431zm-46.793 7.04l3.084-8.325 21.285 6.871-.402 1.454zm32.9-55.065c1.979.639 3.974.977 5.966 1.184l-4.039 14.608-18.172-5.679 5.776-15.589c3.086 2.316 6.576 4.219 10.469 5.476zm-.207 23.508l-6.19 22.385-20.637-6.662 8.005-21.606zm-51.101 9.897l20.574-7.211-2.917 7.874-15.519 5.439zm79.77-91.934c-1.022-1.262-2.306-2.307-3.82-2.959a10.156 10.156 0 00-8.012.006l-5.998 2.594a4.038 4.038 0 01-3.201.002 4.002 4.002 0 01-2.199-2.328l-.798-2.191c9.099-7.899 20.454-14.092 33.954-18.45-4.117 5.713-8.297 13.63-9.926 23.326zm-41.671 18.566c1.876-4.437 5.355-10.755 11.452-17.432 1.254 2.59 3.363 4.709 6.023 5.854a12.081 12.081 0 009.541-.004l6-2.594a2.097 2.097 0 011.672-.002c.311.135.875.471 1.145 1.213a9.724 9.724 0 005.248 5.594c.146 2.69.427 5.371.985 7.994.547 2.58 1.143 5.574 1.254 8.449.156 3.992-.148 7.303-.883 9.574a21.121 21.121 0 01-10.547 12.395c-5.057 2.584-10.818 3.053-16.223 1.309-9.604-3.102-16.193-10.408-17.629-19.543-.62-3.951.04-8.26 1.962-12.807zM58.276 123.99a12.196 12.196 0 017.002-6.264c3.096-1.092 6.422-.898 9.379.521a12.196 12.196 0 016.264 7.002l4.06 11.584-23.164 8.119-4.06-11.583a12.194 12.194 0 01.519-9.379zm10.973 42.164l9.262-3.246-4.169 11.254h-2.286zm148.016 72.582c0 15.123-12.303 27.426-27.426 27.426H80.691c-15.123 0-27.426-12.303-27.426-27.426v-56.574h164v52zm32-16.483c0 4.361-3.547 7.908-7.908 7.908h-16.092v-36h16.092c4.361 0 7.908 3.547 7.908 7.908z" />
          <path d="M135.265 192.162c-16.543 0-30 13.457-30 30s13.457 30 30 30 30-13.457 30-30-13.457-30-30-30zm0 52c-12.131 0-22-9.869-22-22s9.869-22 22-22 22 9.869 22 22-9.869 22-22 22z" />
          <path d="M142.946 227.382c-4.111 3.434-10.438 3.633-14.758.473-1.783-1.303-4.287-.912-5.59.871s-.912 4.285.871 5.59a19.86 19.86 0 0011.795 3.846c4.676 0 9.225-1.646 12.807-4.639a4 4 0 00-5.125-6.141z" />
          <circle cx="125.265" cy="218.162" r="4" />
          <circle cx="145.265" cy="218.162" r="4" />
        </svg>
      )
    case 'videogame':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          fill="white"
          enableBackground="new 0 0 512 512"
          version="1.1"
          viewBox="0 0 512 512"
          xmlSpace="preserve"
        >
          <path d="M386.855 200.142h-56.907v-36.98c0-8.836-7.164-16-16-16H272V77.568c0-8.836-7.164-16-16-16s-16 7.164-16 16v69.594h-41.94c-8.836 0-16 7.164-16 16v36.98h-56.914C56.14 200.142 0 256.282 0 325.287s56.14 125.145 125.145 125.145c56.217 0 105.478-37.521 120.55-91.49h20.61c15.053 53.904 64.259 91.49 120.55 91.49 69.005 0 125.145-56.14 125.145-125.145s-56.14-125.145-125.145-125.145zm-172.795-20.98h83.889v20.98H214.06v-20.98zm172.795 239.27c-46.235 0-84.72-33.768-91.924-78.059a16.001 16.001 0 00-15.793-13.431h-46.277a16.003 16.003 0 00-15.793 13.431c-7.207 44.31-45.708 78.059-91.924 78.059-51.359 0-93.144-41.785-93.144-93.145s41.785-93.146 93.145-93.146h261.711c51.36 0 93.145 41.785 93.145 93.146s-41.785 93.145-93.146 93.145z" />
          <path d="M167.862 309.287h-26.718V282.57c0-8.836-7.164-16-16-16s-16 7.164-16 16v26.718H82.428c-8.836 0-16 7.164-16 16s7.164 16 16 16h26.717v26.717c0 8.836 7.164 16 16 16s16-7.164 16-16v-26.717h26.718c8.836 0 16-7.164 16-16s-7.164-16.001-16.001-16.001z" />
          <circle cx="364.267" cy="347.872" r="23.637" />
          <circle cx="409.44" cy="302.699" r="23.637" />
        </svg>
      )
    case 'kindle':
      return (
        <svg fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M416 496a40.045 40.045 0 0040-40V56a40.045 40.045 0 00-40-40H96a40.045 40.045 0 00-40 40v400a40.045 40.045 0 0040 40zM72 456V56a24.028 24.028 0 0124-24h320a24.028 24.028 0 0124 24v400a24.028 24.028 0 01-24 24H96a24.028 24.028 0 01-24-24z" />
          <path d="M416 432a8 8 0 008-8V56a8 8 0 00-8-8H96a8 8 0 00-8 8v368a8 8 0 008 8zM136 64h48v88l-19.2-14.4a8 8 0 00-9.6 0L136 152zm-32 0h16v104a8 8 0 0012.8 6.4L160 154l27.2 20.4A8 8 0 00200 168V64h208v352H104z" />
          <path d="M384 160H224a8 8 0 000 16h160a8 8 0 000-16zM384 192H128a8 8 0 000 16h256a8 8 0 000-16zM128 240h64a8 8 0 000-16h-64a8 8 0 000 16zM304 240a8 8 0 000-16h-80a8 8 0 000 16zM384 224h-48a8 8 0 000 16h48a8 8 0 000-16zM384 320h-64a8 8 0 000 16h64a8 8 0 000-16zM208 336h80a8 8 0 000-16h-80a8 8 0 000 16zM128 336h48a8 8 0 000-16h-48a8 8 0 000 16zM128 272h128a8 8 0 000-16H128a8 8 0 000 16zM368 352H128a8 8 0 000 16h240a8 8 0 000-16zM384 256h-96a8 8 0 000 16h96a8 8 0 000-16zM128 304h56a8 8 0 000-16h-56a8 8 0 000 16zM184 384h-56a8 8 0 000 16h56a8 8 0 000-16zM384 288H216a8 8 0 000 16h168a8 8 0 000-16zM256 384h-40a8 8 0 000 16h40a8 8 0 000-16zM224 112h64a8 8 0 000-16h-64a8 8 0 000 16zM384 128H224a8 8 0 000 16h160a8 8 0 000-16z" />
        </svg>
      )
    case 'piano':
      return (
        <svg
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          enableBackground="new 0 0 475.352 475.352"
          version="1.1"
          viewBox="0 0 475.352 475.352"
          xmlSpace="preserve"
        >
          <path d="M392.863 204.686l-58.04-168.677 30.779-20.468L355.26 0 47.467 204.686H16.676v120h24.853l5.334 12.001 10.242 126.999h7.69v7.666h8v-7.666h9.168l4.165-139h83.268l5.93 68.54h4.963v5.497h8v-5.497h6.02l2.391-68.54h12.322V429.3c-6.729 1.901-11.68 8.081-11.68 15.41v23.976h16v2.666a4 4 0 008 0v-2.666h10.667v2.666a4 4 0 008 0v-2.666h10.667v2.666a4 4 0 008 0v-2.666h16V444.71c0-7.328-4.951-13.509-11.68-15.41V324.686h126.228l4.164 139h9.169v7.666h8v-7.666h7.69l10.242-126.999 5.334-12.001h24.853v-120h-65.813zm57.813 83h-11.5v-75h11.5v75zm-19.5-75v5.5h-387v-5.5h387zm-274.292-32.898a4.731 4.731 0 011.412-3.822 4.706 4.706 0 013.855-1.32 79.285 79.285 0 0028.285-1.861c32.43-8.109 66.714-8.109 99.146 0a79.324 79.324 0 0028.283 1.861 4.741 4.741 0 013.856 1.32 4.733 4.733 0 011.412 3.822 26.524 26.524 0 009.796 23.059l2.283 1.839H144.805l2.282-1.839a26.522 26.522 0 009.797-23.059zM44.176 275.186v-49h387v49h-387zm0 8h8.458v4.5h-8.458v-4.5zm16.458 0h8.458v4.5h-8.458v-4.5zm16.459 0h8.458v4.5h-8.458v-4.5zm16.458 0h8.458v4.5h-8.458v-4.5zm16.458 0h8.458v4.5h-8.458v-4.5zm16.459 0h8.458v4.5h-8.458v-4.5zm16.458 0h8.458v4.5h-8.458v-4.5zm16.458 0h8.458v4.5h-8.458v-4.5zm16.459 0h8.458v4.5h-8.458v-4.5zm16.458 0h8.458v4.5h-8.458v-4.5zm16.458 0h8.458v4.5h-8.458v-4.5zm16.459 0h8.458v4.5h-8.458v-4.5zm16.458 0h8.458v4.5h-8.458v-4.5zm16.458 0h8.458v4.5h-8.458v-4.5zm16.459 0h8.458v4.5h-8.458v-4.5zm16.458 0h8.458v4.5h-8.458v-4.5zm16.458 0h8.458v4.5h-8.458v-4.5zm16.459 0h8.458v4.5h-8.458v-4.5zm16.458 0h8.458v4.5h-8.458v-4.5zm16.458 0h8.458v4.5h-8.458v-4.5zm16.459 0h8.458v4.5h-8.458v-4.5zm16.458 0h8.458v4.5h-8.458v-4.5zm16.458 0h8.458v4.5h-8.458v-4.5zm16.459 0h8.458v4.5h-8.458v-4.5zm-38.316-78.5h-36.436l-10.017-8.069a18.53 18.53 0 01-6.847-16.115 12.7 12.7 0 00-3.793-10.26 12.706 12.706 0 00-10.35-3.545 71.216 71.216 0 01-25.438-1.674c-33.699-8.425-69.326-8.425-103.025 0a71.273 71.273 0 01-25.439 1.674 12.7 12.7 0 00-10.349 3.545 12.7 12.7 0 00-3.793 10.26 18.528 18.528 0 01-6.847 16.115l-10.016 8.069H81.175L327.939 40.588l56.463 164.098zM353.031 11.09l1.478 2.221L66.727 204.686h-4.812L353.031 11.09zM36.176 212.686v75h-11.5v-75h11.5zm18.955 127h22.864L74.824 437.1H62.987l-7.856-97.414zm9.354 116l-.853-10.586h10.932l-.345 10.586h-9.734zm13.643-124H53.395l-3.111-7h27.845v7zm104.536 53.54l-.373-4.306h4.441l-.15 4.306h-3.918zm4.347-12.306h-5.412l-4.173-48.234h11.267l-1.682 48.234zm40.652-48.234h16.691v104h-16.691v-104zm-8 104h-2.642v-104h2.642v104zm47.013 16.024v15.976h-8v-8a4 4 0 00-8 0v8h-10.667v-8a4 4 0 00-8 0v8h-10.667v-8a4 4 0 00-8 0v8h-8V444.71c0-4.425 3.601-8.024 8.025-8.024h45.283c4.425 0 8.026 3.599 8.026 8.024zm-11.68-16.024h-2.642v-104h2.642v104zm146.136 27l-.345-10.586h10.933l-.854 10.586h-9.734zm11.233-18.586h-11.838l-3.171-97.414h22.865l-7.856 97.414zm9.592-105.414h-24.733v-7h27.845l-3.112 7zm-397.281-15v-21h426v21h-426z" />
        </svg>
      )
    case 'box':
      return (
        <svg
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 511.798 511.798"
        >
          <path d="M150.316 203.722a7.47 7.47 0 004.93-1.851 78.855 78.855 0 018.596-6.523c3.464-2.271 4.43-6.92 2.159-10.384s-6.921-4.432-10.385-2.159a93.886 93.886 0 00-10.237 7.768 7.501 7.501 0 004.937 13.149zM132.556 388.715a7.5 7.5 0 00-1.734 10.464 94.065 94.065 0 009.861 11.641 7.477 7.477 0 005.309 2.202 7.5 7.5 0 005.309-12.797 78.785 78.785 0 01-8.281-9.775 7.5 7.5 0 00-10.464-1.735z" />
          <path d="M504.298 351.931h-78.39v-24.523c0-6.813-5.544-12.356-12.357-12.356h-13.655c-5.083 0-9.218-4.136-9.218-9.219s4.135-9.218 9.218-9.218h13.655c6.813 0 12.357-5.544 12.357-12.357v-24.523h78.39c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-81.363c-3.163-4.721-8.543-7.836-14.639-7.836h-43.781c-4.357-25.104-26.285-44.26-52.615-44.26h-27.037a172.114 172.114 0 00-6.988-6.927c-13.637-12.756-24.389-27.818-31.958-44.769l-12.1-27.1c-3.095-6.93-9.142-11.948-16.262-13.87a56.299 56.299 0 005.583-24.383c0-30.985-25.209-56.194-56.195-56.194s-56.194 25.209-56.194 56.194a56.292 56.292 0 005.583 24.383c-7.12 1.922-13.167 6.941-16.262 13.871l-12.1 27.099c-7.568 16.949-18.321 32.012-31.958 44.77C20.415 219.012 0 266.821 0 316.881c0 96.783 74.891 175.521 166.943 175.521 48.819 0 94.717-22.196 126.511-61.018h20.7c28.211 0 51.163-22.951 51.163-51.163v-5.454h42.979c6.097 0 11.477-3.115 14.639-7.836h81.363c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5zM220.121 119.96l12.1 27.1c7.607 17.035 18.121 32.339 31.274 45.579h-41.069a175.085 175.085 0 00-2.101-4.644c-6.067-12.889-10.865-28.177-14.268-45.479l-5.741-28.414h10.77a9.904 9.904 0 019.035 5.858zm-13.656 293.188h10.19a216.49 216.49 0 01-3.291 10h-6.899c-12.871 0-25.634-3.217-36.908-9.303a7.5 7.5 0 00-7.125 13.199c13.456 7.264 28.683 11.104 44.033 11.104h.771c-11.279 24.197-25.643 38.254-40.293 38.254-30.288 0-62.716-64.1-62.716-159.521 0-46.926 8.349-91.574 22.906-122.497 6.591-13.999 11.774-30.464 15.399-48.897l6.341-31.385h36.14l6.334 31.347c1.563 7.948 3.415 15.521 5.541 22.689a92.419 92.419 0 00-17.103 3.402 7.5 7.5 0 004.312 14.368 77.575 77.575 0 0117.738-3.121 171.054 171.054 0 004.123 9.865c-37.245.275-67.463 30.649-67.463 67.958v84.567c0 37.479 30.491 67.971 67.97 67.971zM153.881 75.591c0-7.203 5.859-13.063 13.062-13.063s13.062 5.859 13.062 13.063-5.859 13.063-13.062 13.063-13.062-5.86-13.062-13.063zm13.062-41.195c22.715 0 41.195 18.479 41.195 41.194a41.282 41.282 0 01-7.37 23.511h-18.531c7.679-5.013 12.769-13.676 12.769-23.511 0-15.474-12.588-28.063-28.062-28.063s-28.062 12.589-28.062 28.063c0 9.835 5.089 18.498 12.769 23.511H133.12a41.275 41.275 0 01-7.37-23.511c-.001-22.714 18.479-41.194 41.193-41.194zM15 316.881c0-45.924 18.683-89.74 51.258-120.214 15.107-14.132 27.02-30.822 35.408-49.608l12.101-27.099a9.903 9.903 0 019.033-5.858h10.771l-5.749 28.452c-3.395 17.266-8.193 32.554-14.26 45.441-15.465 32.852-24.334 79.829-24.334 128.886 0 45.796 7.513 88.846 21.154 121.221 6.074 14.415 13.136 26.101 20.907 34.826C64.654 455.934 15 392.423 15 316.881zm187.837 155.991c1.6-1.794 3.17-3.71 4.703-5.754 6.686-8.916 12.718-20.225 17.865-33.388a7.14 7.14 0 00.333-.864c2.386-6.187 4.576-12.779 6.55-19.718h11.201c.584 0 1.151-.073 1.697-.2 6.89 9.177 17.131 15.691 28.886 17.74-19.797 20.824-44.416 35.321-71.235 42.184zm205.459-113.105h-42.979v-7.426c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v27.88c0 19.94-16.223 36.163-36.163 36.163H281.99c-17.094 0-31.001-13.907-31.001-31.001v-49.856c0-16.373 13.32-29.693 29.693-29.693 14.767 0 26.78 12.014 26.78 26.781v15.248a24.738 24.738 0 01-12.961 21.767l-5.114 2.771a7.5 7.5 0 007.146 13.188l5.114-2.771a39.722 39.722 0 0020.814-34.954v-15.248c0-15.011-7.96-28.193-19.878-35.561v-30.07c0-25.353-20.625-45.978-45.977-45.978h-10.241c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h10.241c17.08 0 30.977 13.896 30.977 30.978v24.43a41.888 41.888 0 00-6.902-.581c-24.644 0-44.693 20.05-44.693 44.693v49.856c0 4.429.642 8.708 1.816 12.765h-31.339c-29.208 0-52.971-23.763-52.971-52.972v-84.567c0-29.208 23.763-52.971 52.971-52.971h10.951l.026.002.041-.002H311.9c21.184 0 38.417 17.233 38.417 38.417v47.369c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-41.526h42.979a2.615 2.615 0 012.612 2.612v27.104h-11.013c-13.354 0-24.218 10.864-24.218 24.218s10.864 24.219 24.218 24.219h11.013v27.104a2.614 2.614 0 01-2.612 2.612z" />
          <path d="M375.283 195.837h85.015c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-85.015c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5zM436.854 219.802c0 4.143 3.357 7.5 7.5 7.5h32.051c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-32.051a7.5 7.5 0 00-7.5 7.5zM502.804 425.829H417.79c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h85.014c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5zM421.872 401.863c0-4.143-3.357-7.5-7.5-7.5h-32.051c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h32.051a7.5 7.5 0 007.5-7.5zM456.865 409.363c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-14.27c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5zM301.849 159.99a10.766 10.766 0 009.285 6.583l31.825 2.013h.001a10.826 10.826 0 008.072-2.901 10.932 10.932 0 003.439-7.935c.017-12.17-4.604-23.481-13.735-33.618-2.097-2.328-5.116-3.657-8.221-3.599a10.814 10.814 0 00-8.08 3.79l-20.852 24.417a10.77 10.77 0 00-1.734 11.25zm30.757-22.136c3.646 4.945 5.817 10.058 6.568 15.462l-18.759-1.187zM271.96 138.42a10.764 10.764 0 008.892 7.108 10.76 10.76 0 0010.333-4.774l17.592-26.598v-.001a10.849 10.849 0 001.503-8.446 10.935 10.935 0 00-5.168-6.932c-10.546-6.074-22.654-7.699-35.995-4.828a10.875 10.875 0 00-7.213 5.338 10.813 10.813 0 00-.735 8.894zm21.689-28.583l-10.368 15.677-6.31-17.681c6.104-.697 11.618-.036 16.678 2.004z" />
        </svg>
      )
    default:
      break
  }
  return null
}

export default Icon
