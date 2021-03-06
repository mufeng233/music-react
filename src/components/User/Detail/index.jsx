import React from "react";
import { connect } from "react-redux";
import {
  Box,
  Grid,
  Stack,
  Chip,
  Card,
  CardContent,
  Typography,
  IconButton,
  Icon,
  Divider,
  Button,
  Paper,
  Avatar,
  Skeleton,
} from "@mui/material";
import moment from "moment";
import Description from "../../Description";

moment.locale("zh-cn");

export const UserDetail = ({ detail, profile }) => {
  return (
    <>
      {detail ? (
        <Card sx={{ display: "flex" }}>
          <Grid container>
            <Grid
              xs={12}
              sm={6}
              md={4}
              lg={3}
              item
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <CardContent>
                <Paper>
                  <Avatar
                    alt={detail.profile.nickname}
                    src={detail.profile.avatarUrl}
                    sx={{ width: 220, height: 220, borderRadius: 3 }}
                  ></Avatar>
                </Paper>
              </CardContent>
            </Grid>
            <Grid xs={12} sm={6} md={8} lg={9} container item>
              <CardContent>
                <Grid xs={12} sm={12} md={12} lg={12} item sx={{ m: 1 }}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Typography variant="h5">
                      {detail.profile.nickname}
                    </Typography>
                    <Chip
                      color="secondary"
                      size="small"
                      variant="outlined"
                      label={`LV.${detail.level}`}
                    />
                  </Stack>
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={12} item sx={{ m: 1 }}>
                  <Stack direction="row" spacing={3}>
                    <Stack sx={{ display: "flex", alignItems: "center" }}>
                      <Typography variant="subtitle1">
                        {detail.profile.eventCount}
                      </Typography>
                      <Typography variant="body1">??????</Typography>
                    </Stack>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <Stack sx={{ display: "flex", alignItems: "center" }}>
                      <Typography variant="subtitle1">
                        {detail.profile.follows}
                      </Typography>
                      <Typography variant="body1">??????</Typography>
                    </Stack>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <Stack sx={{ display: "flex", alignItems: "center" }}>
                      <Typography variant="subtitle1">
                        {detail.profile.followeds}
                      </Typography>
                      <Typography variant="body1">??????</Typography>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={12} item sx={{ m: 1 }}>
                  <Stack direction="row" spacing={1}>
                    {detail.profile.userId === profile?.userId ? (
                      <>
                        <Button
                          variant="outlined"
                          color="primary"
                          startIcon={<Icon>edit</Icon>}
                        >
                          ????????????
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button
                          variant="contained"
                          startIcon={<Icon>add</Icon>}
                        >
                          ??????
                        </Button>
                        <Button
                          variant="contained"
                          color="secondary"
                          startIcon={<Icon>email</Icon>}
                        >
                          ??????
                        </Button>
                      </>
                    )}
                  </Stack>
                </Grid>
                <Grid item sx={{ m: 1 }}>
                  <Description
                    name="????????????"
                    value={detail.profile.signature || "?????????????????????????????????"}
                  />
                  <Description
                    name="????????????"
                    value={`${detail.listenSongs}???`}
                  />
                  <Description
                    name="????????????"
                    value={moment(detail.profile.birthday).format("YYYY-MM-DD")}
                  />
                  <Description
                    name="????????????"
                    value={moment(detail.createTime).fromNow()}
                  />
                </Grid>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      ) : (
        <Grid container spacing={6}>
          <Grid xs={12} item>
            <Skeleton variant="rectangular" height={250} />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default connect(({ auth: { profile } }) => ({
  profile,
}))(UserDetail);
