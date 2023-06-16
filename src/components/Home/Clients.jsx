const people = [
  {
    name: 'Michael Foster',
    role: 'Co-Founder / CTO',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Michael Foster',
    role: 'Co-Founder / CTO',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Michael Foster',
    role: 'Co-Founder / CTO',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Michael Foster',
    role: 'Co-Founder / CTO',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Michael Foster',
    role: 'Co-Founder / CTO',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Michael Foster',
    role: 'Co-Founder / CTO',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Michael Foster',
    role: 'Co-Founder / CTO',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Michael Foster',
    role: 'Co-Founder / CTO',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  // More people...
]

export default function Clients() {
  return (
    <>
      <center>
        <div className="py-10 lg:py-0">
          <div className="container px-6 lg:px-8 justify-center flex flex-col">
            <div className="lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-black text-center">Our Clients</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 text-center">
                We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
                best results for our clients.
              </p>
              <div class="flex mt-6 justify-center">
                <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
              </div>
            </div>

            <ul
              role="list"
              className=" mt-20 flex flex-wrap justify-around "
            >
              {people.map((person) => (
                <li key={person.name} className="w-48 my-5">
                  <img className="mx-auto h-24 w-24 rounded-full" src={person.imageUrl} alt="" />
                  <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm leading-6 text-gray-600">{person.role}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </center>
    </>
  )
}
