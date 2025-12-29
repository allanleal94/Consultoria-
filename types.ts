import React from 'react';

export interface LeadFormData {
  name: string;
  age: string;
  height: string;
  weight: string;
  goal: 'ganhar_massa' | 'perder_peso' | '';
  phone: string;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}