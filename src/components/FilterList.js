import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

//data
import { evos, boss, sUnit, mats } from '../data'

const StyledFilterList = styled.div`
  .Title {
    margin-left: 10px;
    font-weight: 500;
    color: #acacac;
  }
  .Block {
    display: block;
    padding: 3px;
    list-style-type: none;
  }
  .Info {
    margin: 5px 10px 5px 5px;
    color: #7d7d7d;
    text-transform: capitalize;
  }
  @media (max-width: 1050px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    ul {
      padding-left: 5px;
    }
  }
`

function FilterList({ onFiltersChange }) {
  const [evoFilter, setEvoFilter] = useState([])
  const [bossFilter, setBossFilter] = useState([])
  const [sUnitFilter, setSUnitFilter] = useState([])
  const [materialFilter, setMaterialFilter] = useState([])

  useEffect(() => {
    onFiltersChange({ evos: evoFilter, boss: bossFilter, sUnit: sUnitFilter, mats: materialFilter })
  }, [evoFilter, bossFilter, sUnitFilter, materialFilter])

  const handleOnEvoChange = e => {
    const nextEvoFilter = e.target.value

    setEvoFilter(state => {
      const currentFilterLoc = state.indexOf(nextEvoFilter)
      if (currentFilterLoc === -1) {
        return [...evoFilter, nextEvoFilter]
      } else {
        return [
          ...state.slice(0, currentFilterLoc),
          ...state.slice(currentFilterLoc + 1, state.length),
        ]
      }
    })
  }

  const handleOnBossChange = e => {
    const nextBossFilter = e.target.value

    setBossFilter(state => {
      const currentFilterLoc = state.indexOf(nextBossFilter)
      if (currentFilterLoc === -1) {
        return [...bossFilter, nextBossFilter]
      } else {
        return [
          ...state.slice(0, currentFilterLoc),
          ...state.slice(currentFilterLoc + 1, state.length),
        ]
      }
    })
  }

  const handleOnSUnitChange = e => {
    const nextSUnitFilter = e.target.value

    setSUnitFilter(state => {
      const currentFilterLoc = state.indexOf(nextSUnitFilter)
      if (currentFilterLoc === -1) {
        return [...sUnitFilter, nextSUnitFilter]
      } else {
        return [
          ...state.slice(0, currentFilterLoc),
          ...state.slice(currentFilterLoc + 1, state.length),
        ]
      }
    })
  }

  const handleOnMaterialChange = e => {
    const nextMaterialFilter = e.target.value

    setMaterialFilter(state => {
      const currentFilterLoc = state.indexOf(nextMaterialFilter)
      if (currentFilterLoc === -1) {
        return [...materialFilter, nextMaterialFilter]
      } else {
        return [
          ...state.slice(0, currentFilterLoc),
          ...state.slice(currentFilterLoc + 1, state.length),
        ]
      }
    })
  }

  return (
    <StyledFilterList>
      <div>
        <div className="Title">Evos:</div>
        <ul>
          {evos.map(evo => (
            <li className="Block" key={evo}>
              <input
                type="checkbox"
                value={evo}
                checked={evoFilter.includes(evo)}
                onChange={handleOnEvoChange}
              />
              <label className="Info">{evo}</label>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="Title">Boss:</div>
        <ul>
          {boss.map(boss => (
            <li className="Block" key={boss}>
              <input
                type="checkbox"
                value={boss}
                checked={bossFilter.includes(boss)}
                onChange={handleOnBossChange}
              />
              <label className="Info">{boss}</label>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="Title">S Unit:</div>
        <ul>
          {sUnit.map(sUnit => (
            <li className="Block" key={sUnit}>
              <input
                type="checkbox"
                value={sUnit}
                checked={sUnitFilter.includes(sUnit)}
                onChange={handleOnSUnitChange}
              />
              <label className="Info">{sUnit}</label>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="Title">Materials:</div>
        <ul>
          {mats.map(material => (
            <li className="Block" key={material}>
              <input
                type="checkbox"
                value={material}
                checked={materialFilter.includes(material)}
                onChange={handleOnMaterialChange}
              />
              <label className="Info">{material}</label>
            </li>
          ))}
        </ul>
      </div>
    </StyledFilterList>
  )
}

export default FilterList
