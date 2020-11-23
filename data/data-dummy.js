import Farm from "../models/farms";
import User from "../models/user";
import Animal from "../models/animal";
import Stall from "../models/stall";
import Activity from "../models/activity";
import post from "../models/post";
import comment from "../models/comments";

const new_activity= [];
for (let index = 0; index < 10; index++) {
  const isOdd = index%2 == 1
  const element = new Activity(index, 'กิจกรรม '+(index+1), isOdd ? 'อาบน้ำให้วัว': 'ฉีดยา', isOdd ? 'stall': 'animal', 'f1', 1, isOdd ? undefined: 1,'2020-11-14 15:02:16.341093','','','',0 )
  new_activity.push(element)
}


const type = ['question', 'share']
export const COMMENTS = [
  new comment(1, 'f1', 1, 0, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', ''),
  new comment(2, 'f2', 1, 0, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', ''),
  new comment(3, 'f1', 1, 0, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', ''),
]

export const POSTS = [
  new post(1, type[0], 'f1', 0, 'สวัสดีครับ1', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"),
  new post(2, type[1], 'f2', 0, 'สวัสดีครับ2', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"),
  new post(3, type[0], 'f1', 0, 'สวัสดีครับ3', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book")

]

export const FARMS = [
    new Farm("f1", "ฟาร์มสุขใจ1", "0.1", 35.4,"168/65 ต.หนองวัว อ.ดอเราะ จ.สงขลา","https://www.organicfarmthailand.com/wp-content/uploads/2016/09/Farm-from-a-Box-SMA.jpg", [101,50], "Fri Oct 23 2020 12:47:26 GMT+0700 (Indochina Time)"),
    new Farm("f2", "ฟาร์มสุขใจ2", "0.2", 35.4,"168/65 ต.หนองวัว อ.ดอเราะ จ.สงขลา","https://www.organicfarmthailand.com/wp-content/uploads/2016/09/Farm-from-a-Box-SMA.jpg", [101,50], "Fri Oct 23 2020 12:47:26 GMT+0700 (Indochina Time)"),
    new Farm("f3", "ฟาร์มสุขใจ3", "0.1", 35.4,"168/65 ต.หนองวัว อ.ดอเราะ จ.สงขลา","https://www.organicfarmthailand.com/wp-content/uploads/2016/09/Farm-from-a-Box-SMA.jpg", [101,50], "Fri Oct 23 2020 12:47:26 GMT+0700 (Indochina Time)"),
    new Farm("f4", "ฟาร์มสุขใจ4", "0.2", 35.4,"168/65 ต.หนองวัว อ.ดอเราะ จ.สงขลา","https://www.organicfarmthailand.com/wp-content/uploads/2016/09/Farm-from-a-Box-SMA.jpg", [101,50], "Fri Oct 23 2020 12:47:26 GMT+0700 (Indochina Time)"),
    new Farm("f5", "ฟาร์มสุขใจ5", "0.1", 35.4,"168/65 ต.หนองวัว อ.ดอเราะ จ.สงขลา","https://www.organicfarmthailand.com/wp-content/uploads/2016/09/Farm-from-a-Box-SMA.jpg", [101,50], "Fri Oct 23 2020 12:47:26 GMT+0700 (Indochina Time)"),
    new Farm("f6", "ฟาร์มสุขใจ6", "0.2", 35.4,"168/65 ต.หนองวัว อ.ดอเราะ จ.สงขลา","https://www.organicfarmthailand.com/wp-content/uploads/2016/09/Farm-from-a-Box-SMA.jpg", [101,50], "Fri Oct 23 2020 12:47:26 GMT+0700 (Indochina Time)"),
  ];

  export const STALLS = [
    new Stall(1, 'คอก 1', 'f1', 2, 10),
    new Stall(2, 'คอก 2', 'f1', 2, 10),
    new Stall(3, 'คอก 1', 'f2', 2, 10),
    new Stall(4, 'คอก 2', 'f2', 2, 10),
  ];

  export const ANIMALS = [
    new Animal(1,'วัวเนื้อ 1', 'วัวเนื่อ', 1, 'f1', 'บรามัน', 20, 20, 'วัวไทย', 'M', '2020-11-12 15:02:16.341093', ''),
    new Animal(2,'วัวเนื้อ 2', 'วัวเนื่อ', 1, 'f1', 'บรามัน', 20, 20, 'วัวไทย', 'F', '2020-11-12 15:02:16.341093', ''),
    new Animal(3,'วัวเนื้อ 3', 'วัวเนื่อ', 3, 'f2', 'บรามัน', 20, 20, 'วัวไทย', 'M', '2020-11-12 15:02:16.341093', ''),
    new Animal(4,'วัวเนื้อ 4', 'วัวเนื่อ', 3, 'f2', 'บรามัน', 20, 20, 'วัวไทย', 'F', '2020-11-12 15:02:16.341093', ''),
  ];

  export const ACTIVITIES = new_activity;

  export const USER = new User(0, 'ลุงปอนด์ โคราช', 'xxxx@hotmail.com', '', 'owner', "f1", "สหัสวรรษ", "ขันรักษา", "xxsdfid", "https://static.bangkokpost.com/media/content/20190410/c1_1659632_190410173728.jpg", 'owner')