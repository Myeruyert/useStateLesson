import Image from "next/image";
import { Inter } from "next/font/google";
import Input from "@/components/input";
import UserCard from "@/components/user.card";

const inter = Inter({ subsets: ["latin"] });

const profiles = [
  {
   id: 1,
   firstName: 'John Doe',
   age: 25,
   email: 'john.doe@example.com',
   address: '123 Main St, Springfield, IL',
   phone: '99011090',
   jobTitle: 'Software Engineer',
   imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
   id: 2,
   firstName: 'Jane Smith',
   age: 30,
   email: 'jane.smith@example.com',
   address: '456 Oak St, Springfield, IL',
   phone: '99011091',
   jobTitle: 'Project Manager',
   imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
   id: 3,
   firstName: 'Alice Johnson',
   age: 28,
   email: 'alice.johnson@example.com',
   address: '789 Pine St, Springfield, IL',
   phone: '99011092',
   jobTitle: 'UX Designer',
   imageUrl: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
  {
   id: 4,
   firstName: 'Bob Brown',
   age: 35,
   email: 'bob.brown@example.com',
   address: '101 Maple St, Springfield, IL',
   phone: '99011093',
   jobTitle: 'Product Owner',
   imageUrl: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
   id: 5,
   firstName: 'Charlie Davis',
   age: 22,
   email: 'charlie.davis@example.com',
   address: '202 Elm St, Springfield, IL',
   phone: '99011094',
   jobTitle: 'Marketing Specialist',
   imageUrl: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <h1 className="text-5xl text-gray-950">User Find Application</h1>
      <div className="">
        <Input />
      </div>
      <p>list</p>
      {profiles.map((profile)=>(
      <UserCard 
        id={profile.id}
        firstName={profile.firstName}
        age={profile.age}
        email={profile.email}
        address={profile.address}
        phone={profile.phone}
        jobTitle={profile.jobTitle}
        userImg={profile.imageUrl} 
      />
      ))
      }

    </main>
  );
}
