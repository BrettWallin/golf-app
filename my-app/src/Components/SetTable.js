import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import { SelectedClubsContext } from '../Components/SelectedClubsContext'; // Import the context

export default function SetTable() {
  const { selectedClubs, removeClub } = React.useContext(SelectedClubsContext); // Use the context
  const [selected, setSelected] = React.useState([]);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = selectedClubs.map((club) => club.club);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, club) => {
    const selectedIndex = selected.indexOf(club);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, club);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleRemoveSelected = () => {
    selected.forEach((club) => {
      const clubToRemove = selectedClubs.find((c) => c.club === club);
      if (clubToRemove) {
        removeClub(clubToRemove);
      }
    });
    setSelected([]);
  };

  const isSelected = (club) => selected.indexOf(club) !== -1;

  return (
    <TableContainer component={Paper}>
      <Table aria-label="selected clubs table">
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                color="primary"
                indeterminate={selected.length > 0 && selected.length < selectedClubs.length}
                checked={selectedClubs.length > 0 && selected.length === selectedClubs.length}
                onChange={handleSelectAllClick}
                inputProps={{ 'aria-label': 'select all clubs' }}
              />
            </TableCell>
            <TableCell>Club</TableCell>
            <TableCell align="right">Hand</TableCell>
            <TableCell align="right">Loft</TableCell>
            <TableCell align="right">Material</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {selectedClubs.map((club) => {
            const isItemSelected = isSelected(club.club);
            const labelId = `set-table-checkbox-${club.club}`;

            return (
              <TableRow
                hover
                onClick={(event) => handleClick(event, club.club)}
                role="checkbox"
                aria-checked={isItemSelected}
                tabIndex={-1}
                key={club.club}
                selected={isItemSelected}
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    checked={isItemSelected}
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </TableCell>
                <TableCell component="th" id={labelId} scope="row">
                  {club.club}
                </TableCell>
                <TableCell align="right">{club.hand}</TableCell>
                <TableCell align="right">{club.loft}</TableCell>
                <TableCell align="right">{club.material}</TableCell>
                <TableCell align="right">{club.price}</TableCell>
                <TableCell align="right">
                  <Tooltip title="Remove">
                    <IconButton
                      color="secondary"
                      onClick={(event) => {
                        event.stopPropagation();
                        removeClub(club);
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <Tooltip title="Remove Selected">
        <IconButton
          color="secondary"
          onClick={handleRemoveSelected}
          disabled={selected.length === 0}
        >
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </TableContainer>
  );
}
