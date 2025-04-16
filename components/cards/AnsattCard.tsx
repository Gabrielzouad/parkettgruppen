import { Card } from '@/components/ui/card';
import { Mail, Phone } from 'lucide-react';
import Image from 'next/image';

interface EmployeeCardProps {
  name: string;
  email: string;
  role: string;
  phone: string;
  imageUrl: string;
  id: number;
}

export default function AnsattCard({
  name,
  email,
  role,
  phone,
  imageUrl,
}: EmployeeCardProps) {
  return (
    <Card className='w-full max-w-sm mx-auto overflow-hidden border border-gray-200 rounded-none'>
      <div className='relative h-72'>
        <Image
          alt={`${name} sitt bilde`}
          className='object-cover'
          src={imageUrl || '/defaultAnsatte.png'}
          fill
          sizes='(max-width: 768px) 100vw, 300px'
          style={{
            objectFit: 'cover',
            objectPosition: 'center 10%', // Position to focus on face/upper body
          }}
          priority
        />
      </div>
      <div className='p-6 space-y-4 bg-white'>
        <div className='space-y-1'>
          <h2 className='text-2xl font-bold tracking-tight text-gray-900'>
            {name}
          </h2>
          <p className='text-sm text-gray-500'>{role}</p>
        </div>
        <div className='space-y-2 items-center'>
          <div className='flex items-center space-x-2 text-center text-sm text-gray-700'>
            <Mail className='w-4 h-4' />
            <span>{email}</span>
          </div>
          {phone && (
            <div className='flex items-center space-x-2 text-sm text-gray-700'>
              <Phone className='w-4 h-4' />
              <span>{phone}</span>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
