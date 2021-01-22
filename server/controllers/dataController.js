import fs from 'fs';

export const getData = (req, res) => {
  const data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));
  res.status(200).json({
    status: 'sucess',
    message: 'Data returned successful',
    data: data,
  });
};
