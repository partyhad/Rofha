import React from 'react';

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

export type UncertainObjectType = {
  [key: string]: any;
};

export type UserType = {
  id: number;
  titles: string;
  names: string;
  address: string;
  dob: string;
  gender: string;
  phone: string;
  email: string;
  status: string;
  dept: string;
  d_unit: string;
  fname: string;
  lname: string;
  marital: string;
  pastors: string;
  hods: string;
  hous: string;
  dcns: string;
  flagz: string;
  subscribed: string;
  churchCenter: string;
  member: string;
  registrationSource: string;
  password: string;
  verificationCode: string;
  isPasswordSet: string;
  createdAt: string;
  updatedAt: string;
  token: string;
};

export type FeedbackType = {
  id: number;
  fullName: string;
  email: string;
  phoneNumber: string;
  content: string;
  status: 'read' | 'unread';
  source: 'web' | 'mobile';
  updatedBy: string;
  createdAt: string;
  updatedAt: string;
};

export type UserResultType = {
  data: UserType[];
  meta: PageMetaType;
};

export type PageMetaType = {
  totalResults: number;
  resultsPerPage: number;
  totalPages: number;
  currentPage: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
};

export type DevotionalType = {
  dish_id: number;
  titles: string;
  scripture1: string;
  scripture2: string;
  main_text: string;
  contents: string;
  ditto: Date; // Date
  years: string;
  months: string;
  days: string;
  nu_url: string;
  views: number;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
};

export type EventType = {
  id: number;
  name: string;
  theme: string; //Topic of event
  mainText: string; // Bible verse of event
  date: Date; // Event dates would be entered as desired. E.g: Every Tuesday in August
  time: string; // Time would also be entered as desired. E.g: 6pm on Tuesday, 8pm on Monday and Saturday
  allowRegistration: boolean;
  limitedNumberRegistration: boolean; // if the registration has a number limit
  registrationNumberLimit: number;
  limitedDateRegistration: boolean; // if the registration has a date limit
  registrationDateLimit: Date;
  // Event Image
  poster: string;
  registrationEntries: any; // each event would determine the data it aims to collect
  eventType: 'online' | 'offline';
  description: string;
  location: string;
  createdBy: string;
  updatedBy: string;
  createdAt: string;
  updatedAt: string;
  requiredRegistrationDetails: {
    id: string;
    name: string;
    type: string;
    options?: string;
  }[];
  gallery: EventGalleryType;
};

export type EventGalleryType ={
    id: number;
    imageURL: string;
    event_id: number;
    createdAt: Date;
    updatedAt: Date;
  }[]

export type AdminType = {
  id: string;
  fullname: string;
  email: string;
  role: string;
  active: boolean;
  avatar?: string;
  createdBy: string;
  updatedBy: string;
  createdAt: string;
  updatedAt: string;
};

export interface RegistrationDetailType {
  [id: string]: {
    id: string;
    name: string;
    type: string;
    options?: string;
  };
}

export interface TestimonyType {
  test_id: number;
  names: string;
  email: string;
  phoneNumber: string;
  titles: string;
  main_gist: string;
  ditto: Date;
  status: 'pending' | 'approved' | 'declined' | 'archived';
  source: 'web' | 'mobile';
  updatedBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface TransactionType {
  reference: string;
  status: string;
  source: string;
  createdAt: Date;
  _id: string;
}

export interface AnnouncementType {
  id: number;
  title: string;
  details: string;
  priority: number;
  image: string;
  createdBy: string;
  updatedBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface TFCCCellType {
  cell_id: number;
  church_id: string;
  zone_id: string;
  host_address: string;
  cell_leader: string;
  cell_leader_id: number;
  phone: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  church: ChurchType;
  tfccZone: TFCCZoneType;
}

export interface TFCCZoneType {
  zone_id: number;
  church_id: string;
  zonal: string;
  createdAt: string;
  updatedAt: string;
  church: ChurchType;
}
export interface ChurchType {
  church_id: number;
  church_label: string;
  location: string;
  address: string;
  contact_phone: string;
  contact_email: string;
  createdAt: string;
  updatedAt: string;
}

export interface TFCCLeaderType {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  mobile: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

export interface UnitType {
  id: number;
  dept_id: string;
  u_names: string;
  createdAt: string;
  updatedAt: string;
  department: DepartmentType;
}

export interface DepartmentType {
  id: number;
  names: string;
  createdAt: string;
  updatedAt: string;
}

export interface BulletinSubscriberType {
  id: number;
  address: string;
  subscribed: boolean;
  flagz: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface VisitorType {
  id: number;
  fname: string;
  lname: string;
  address: string;
  nearest: string;
  marital: string;
  gender: string;
  phone: string;
  email: string;
  contact_mode: string;
  service_opinion: string;
  suggestions: string;
  membership: string;
  dated: Date;
  assigned: boolean;
  category: string;
  timer2: boolean;
  timer21: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface AssignedVisitorType {
  id: number;
  case_id: string;
  v_id: number;
  names: string;
  address: string;
  gender: string;
  phone: string;
  assigned: string;
  assigned_id: number;
  status: string;
  response: string;
  assigned_p: string;
  ditto: string;
  nearest: string;
  createdAt: string;
  updatedAt: string;
  visitor: VisitorType;
  tfccLeader: TFCCLeaderType;
}

export interface YoutubeVideoType {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    publishedAt: Date;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };
      medium: {
        url: string;
        width: number;
        height: number;
      };
      high: {
        url: string;
        width: number;
        height: number;
      };
      standard: {
        url: string;
        width: number;
        height: number;
      };
      maxres: {
        url: string;
        width: number;
        height: number;
      };
    };
    channelTitle: string;
    playlistId: string;
    position: number;
    resourceId: {
      kind: string;
      videoId: string;
    };
    videoOwnerChannelTitle: string;
    videoOwnerChannelId: string;
  };
}
